import { useParams } from "react-router-dom";
import useMovies from "../hooks/useMovies";
import { capitalizeFirstLetter, genreMap } from "../utils/helpers";

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
      <h1>{capitalizeFirstLetter(genre)}</h1>
    </main>
  );
}

export default Genres;
