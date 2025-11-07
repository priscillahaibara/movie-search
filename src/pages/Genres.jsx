import { useParams } from "react-router-dom";
import useMovies from "../hooks/useMovies";
import { genreMap } from "../utils/helpers";

function Genres() {
  const { media, genre } = useParams();
  const genreId = genreMap[media]?.[genre]
  const { data, isLoading, error } = useMovies({
    type: "tmdbByGenre",
    media,
    genreId,
  });

  return (
    <main>
      <h1>{genre.toUpperCase()}</h1>
    </main>
  );
}

export default Genres;
