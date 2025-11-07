import { useParams } from "react-router-dom";
import useMovies from "../hooks/useMovies";

function Genres() {
  const { media, genre } = useParams();

  return (
    <main>
      <h1>{genre.toUpperCase()}</h1>
    </main>
  );
}

export default Genres;
