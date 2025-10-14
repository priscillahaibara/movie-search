import useFetch from "./useFetch";

/* 
Custom hook for showing movie details
- Uses useFetch to get data, loading, and error states
*/

function useMovieDetails(id) {
  const OMDB_API_KEY = import.meta.env.VITE_OMDB_API_KEY;
  const { data, error, isLoading } = useFetch(
    id ? `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${id}` : null
  );

  return { data, error, isLoading };
}

export default useMovieDetails;
