import { useEffect, useState } from "react";

function useMovieCast( imdbID ) {
  const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!imdbID) return;

    fetch(
      `https://api.themoviedb.org/3/find/${imdbID}?api_key=${TMDB_API_KEY}&external_source=imdb_id`
    )
      .then((response) => {
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        return response.json();
      })
      .then((json) => {
        setData(json);
        console.log(json);
      });
  }, [imdbID]);

  return <div></div>;
}

export default useMovieCast;
