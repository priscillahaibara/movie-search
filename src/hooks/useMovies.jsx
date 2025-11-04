import { useEffect, useState } from "react";
import useApi from "./useApi";
import { getImdbIdFromTmdb, getTmdbIdFromImdb } from "../utils/helpers";

export default function useMovies({ type, id, query, media }) {
  const OMDB_API_KEY = import.meta.env.VITE_OMDB_API_KEY;
  const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  const [url, setUrl] = useState("");

  useEffect(() => {
    switch (type) {
      case "omdbSearch":
        if (!query || query.trim().length < 2) {
          setUrl("");
          return;
        }
        setUrl(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${query}`);
        break;

      case "omdbDetails": {
        if (!id) return;

        const isOmdb = id.startsWith("tt");
        if (isOmdb) {
          setUrl(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${id}`);
        } else {
          getImdbIdFromTmdb(id).then((imdbId) =>
            setUrl(
              `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${imdbId}`
            )
          );
        }

        break;
      }

      case "tmdbTopRated":
        if (!media) return;
        setUrl(
          `https://api.themoviedb.org/3/${media}/top_rated?api_key=${TMDB_API_KEY}`
        );
        break;

      case "tmdbCast":
        if (!id) return;

        getTmdbIdFromImdb(id).then((data) => {
          let mediaType = null;
          let tmdbId = null;

          if (data.movie_results?.length) {
            mediaType = "movie";
            tmdbId = data.movie_results[0].id;
          } else if (data.tv_results?.length) {
            mediaType = "tv";
            tmdbId = data.tv_results[0].id;
          }
          setUrl(
            `https://api.themoviedb.org/3/${mediaType}/${tmdbId}/credits?api_key=${TMDB_API_KEY}`
          );
        });
        break;

      default:
        setUrl("");
    }
  }, [type, id, query, media]);

  const transform = (json) => {
    switch (type) {
      case "omdbSearch":
        return json?.Search || [];
      case "tmdbTopRated":
        return json?.results || [];
      case "tmdbCast":
        return json?.cast || [];
      default:
        return json;
    }
  };

  const { data, error, isLoading } = useApi(url, transform);

  return { data, error, isLoading };
}
