import { useEffect, useState, useMemo } from "react";
import useApi from "./useApi";
import {
  debounce,
  getTmdbData,
  getTmdbDataFromImdb,
  loadMovie
} from "../utils/helpers";

export default function useMovies({ type, id, genreId, query, media, genre, page = 1 }) {
  const OMDB_API_KEY = import.meta.env.VITE_OMDB_API_KEY;
  const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  const [url, setUrl] = useState("");
  const [savedMovies, setSavedMovies] = useState([]);

  const debouncedSearch = useMemo(
    () =>
      debounce((query) => {
        setUrl(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${query}`);
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
          setUrl(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${id}`);
        } else {
          getTmdbData(id).then((tmdbData) => {
            if (!tmdbData?.imdb_id) return;
            setUrl(
              `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${tmdbData.imdb_id}`
            );
          });
        }
        break;

      case "tmdbTopRated":
        if (!media) return;
        setUrl(
          `https://api.themoviedb.org/3/${media}/top_rated?api_key=${TMDB_API_KEY}`
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
              `https://api.themoviedb.org/3/${mediaType}/${tmdbId}/credits?api_key=${TMDB_API_KEY}`
            );
          });
        } else {
          const mediaType = media === "tv" ? "tv" : "movie";
          setUrl(
            `https://api.themoviedb.org/3/${mediaType}/${id}/credits?api_key=${TMDB_API_KEY}`
          );
        }
        break;

      case "tmdbByGenre":
        {
          setUrl(
            `https://api.themoviedb.org/3/discover/${media}?api_key=${TMDB_API_KEY}&with_genres=${genreId}&page=${page}`
          );
        }
        break;

      case "favorites":
        {
          const savedIds = loadMovie();
          if (savedIds.length) {
            Promise.all(
              savedIds.map((imdbId) =>
                fetch(
                  `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${imdbId}`
                )
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
      case 'tmdbByGenre':
        return json?.results || [];
      default:
        return json;
    }
  };

  const { data, error, isLoading } = useApi(url, transform);

  return { data, error, isLoading, savedMovies };
}
