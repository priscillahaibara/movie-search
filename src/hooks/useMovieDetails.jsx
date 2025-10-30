import useFetch from "./useFetch";

/* 
Custom hook for showing movie details
- Uses useFetch to get data, loading, and error states
*/

function useMovieDetails(id) {
  const OMDB_API_KEY = import.meta.env.VITE_OMDB_API_KEY;
  const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  const isOmdb = id.startsWith("tt");

  const url = isOmdb
    ? `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${id}`
    : `https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_API_KEY}&language=en-US`;

  const { data, error, isLoading } = useFetch(url);

  return {data, error, isLoading}
}

export default useMovieDetails;
