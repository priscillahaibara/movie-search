import useFetch from "./useFetch";
import { useEffect, useState } from "react";

/* 
Custom hook for movie searching (OMDb API)
- Uses useFetch to get data, loading, and error states
*/

function useMovieSearch(apiKey) {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  const url = debouncedQuery
    ? `https://www.omdbapi.com/?apikey=${apiKey}&s=${debouncedQuery}`
    : "";

  const { data, error, isLoading } = useFetch(url);

  return { data, error, isLoading, query, setQuery };
}

export default useMovieSearch;
