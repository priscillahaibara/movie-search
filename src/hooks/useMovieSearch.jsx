import useFetch from "./useFetch";
import { useState } from "react";

/* 
Custom hook for movie searching (OMDb API)
- Uses useFetch to get data, loading, and error states
*/

function useMovieSearch(apiKey) {
  const [query, setQuery] = useState("");
  const url = query
    ? `https://www.omdbapi.com/?apikey=${apiKey}&s=${query}`
    : "";
  const { data, error, isLoading } = useFetch(url);

  return { data, error, isLoading, query, setQuery };
}

export default useMovieSearch;
