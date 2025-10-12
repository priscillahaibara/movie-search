import { useParams } from "react-router-dom";
import styles from "./Movie.module.css";
import useMovieDetails from "../hooks/useMovieDetails";
import MoviePoster from "../components/MoviePoster";
import MovieHeader from "../components/MovieHeader";
import MovieInfo from "../components/MovieInfo";

function Movie() {
  const { id } = useParams();
  const { data } = useMovieDetails(id);

  return (
    <main>
      <MoviePoster data={data} />
      <MovieHeader data={data} />
      <MovieInfo data={data} />
      
    </main>
  );
}

export default Movie;
