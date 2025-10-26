import { useEffect, useState } from "react";

function useMovieGenre(type) {
  const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    async function fetchMovies() {
      try {
        const findRes = await fetch(
          `https://api.themoviedb.org/3/${type}/top_rated?api_key=${TMDB_API_KEY}`
        );
        if (!findRes.ok) throw new Error(`Error: ${findRes.status}`);
        const findJson = await findRes.json();
        const results = findJson.results.slice(0, 10);
        setData(results);
        console.log(results);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        } 
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovies();
  }, [type]);

  return { data , isLoading, error };
}

export default useMovieGenre;
