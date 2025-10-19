import { useEffect, useState } from "react";

function useMovieCast(imdbID) {
  const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (!imdbID) return;

    async function fetchCast() {
      try {
        // 1️⃣ Find the media info using the IMDb ID
        const findRes = await fetch(
          `https://api.themoviedb.org/3/find/${imdbID}?api_key=${TMDB_API_KEY}&external_source=imdb_id`
        );
        if (!findRes.ok) throw new Error(`Error: ${findRes.status}`);
        const findJson = await findRes.json();

        // 2️⃣ Determine which type of result it is
        let mediaType = null;
        let tmdbId = null;

        if (findJson.movie_results?.length) {
          mediaType = "movie";
          tmdbId = findJson.movie_results[0].id;
        } else if (findJson.tv_results?.length) {
          mediaType = "tv";
          tmdbId = findJson.tv_results[0].id;
        }

        if (!tmdbId) {
          console.warn("No TMDb match found for this IMDb ID");
          setCast([]);
          return;
        }

        // 3️⃣ Fetch the correct credits
        const creditsUrl = `https://api.themoviedb.org/3/${mediaType}/${tmdbId}/credits?api_key=${TMDB_API_KEY}`;
        const creditsRes = await fetch(creditsUrl);
        const creditsJson = await creditsRes.json();

        const mainCast = creditsJson.cast?.sort((a, b) => a.order - b.order).slice(0, 5) || []

        setCast(mainCast);
      } catch (err) {
        console.error("Error fetching cast:", err);
      }
    }

    fetchCast();
  }, [imdbID]);

  return { cast };
}

export default useMovieCast;
