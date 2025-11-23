import { useEffect, useState, useMemo } from "react";
import useApi from "./useApi";
import {
  debounce,
  getTmdbData,
  getTmdbDataFromImdb,
  loadMovie,
} from "../utils/helpers";

export default function useMovies({
  type,
  id,
  genreId,
  query,
  media,
  genre,
  page = 1,
}) {
  const [url, setUrl] = useState("");
  const [savedMovies, setSavedMovies] = useState([]);

  const debouncedSearch = useMemo(
    () =>
      debounce((query) => {
        setUrl(
          `/.netlify/functions/omdb?type=search&query=${encodeURIComponent(
            query
          )}`
        );
      }, 500),
    []
  );

  useEffect(() => {
    if (!type) return;

    switch (type) {
      case "omdbSearch":
        if (!query || query.trim().length < 2) {
          setUrl("");
          return;
        }

        debouncedSearch(query);
        break;

      case "omdbDetails":
        if (!id) return;

        if (id.startsWith("tt")) {
          setUrl(`/.netlify/functions/omdb?type=details&id=${id}`);
          break;
        }

        (async () => {
          const mediaType = media || "movie";
          const result = await getTmdbData(id, mediaType);

          if (!result?.imdb_id) {
            console.warn("No IMDb ID found for TMDB ID");
            setUrl("");
            return;
          }

          setUrl(`/.netlify/functions/omdb?type=details&id=${result.imdb_id}`);
        })();
        break;

      case "tmdbTopRated":
        if (!media) return;
        setUrl(
          `/.netlify/functions/tmdb?type=topRated&media=${media}&page=${page}`
        );
        break;

      case "tmdbCast":
        if (!id) return;

        if (id.startsWith("tt")) {
          getTmdbDataFromImdb(id).then((data) => {
            const tmdbResult = data.movie_results?.[0] || data.tv_results?.[0];

            if (!tmdbResult) return;

            const mediaType = data.movie_results?.length ? "movie" : "tv";
            const tmdbId = tmdbResult.id;

            setUrl(
              `/.netlify/functions/tmdb?type=credits&media=${mediaType}&id=${tmdbId}`
            );
          });
        } else {
          const mediaType = media === "tv" ? "tv" : "movie";
          setUrl(
            `/.netlify/functions/tmdb?type=credits&media=${mediaType}&id=${id}`
          );
        }
        break;

      case "tmdbByGenre":
        {
          setUrl(
            `/.netlify/functions/tmdb?type=byGenre&media=${media}&genreId=${genreId}&page=${page}`
          );
        }
        break;

      case "tmdbLatest":
        setUrl(`/.netlify/functions/tmdb?type=latest`);
        break;

      case "favorites":
        {
          const savedIds = loadMovie();

          if (savedIds.length) {
            Promise.all(
              savedIds.map((imdbId) =>
                fetch(`/.netlify/functions/omdb?type=details&id=${imdbId}`)
                  .then((res) => res.json())
                  .catch(() => null)
              )
            ).then((results) => {
              const validMovies = results.filter(
                (m) => m && m.Response !== "False"
              );
              setSavedMovies(validMovies);
            });
          } else {
            setSavedMovies([]);
          }
        }
        break;

      default:
        setUrl("");
    }
  }, [type, id, genreId, query, media, genre, debouncedSearch, page]);

  const transform = (json) => {
    switch (type) {
      case "omdbSearch":
        return json?.Search || [];
      case "tmdbTopRated":
        return json?.results || [];
      case "tmdbCast":
        return json?.cast.slice(0, 10) || [];
      case "tmdbByGenre":
        return json?.results || [];
      case "tmdbLatest":
        return json?.results || [];
      default:
        return json;
    }
  };

  const { data, error, isLoading } = useApi(url, transform);

  return { data, error, isLoading, savedMovies };
}
