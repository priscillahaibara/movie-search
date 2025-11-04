import { useParams } from "react-router-dom";
import styles from "./Movie.module.css";
import useMovies from "../hooks/useMovies";
/* import useMovieCast from "../hooks/useMovieCast"; */
import MoviePoster from "../components/MoviePoster";
import MovieHeader from "../components/MovieHeader";
import MovieInfo from "../components/MovieInfo";
import MovieCast from "../components/MovieCast";

function Movie() {
  const { id } = useParams();
  const { data } = useMovies({ id, type: "omdbDetails" });

  return (
    <main className={styles.main}>
      <MoviePoster data={data} />
      <MovieHeader data={data} />
      <MovieInfo data={data} />
      <MovieCast id={id} />
    </main>
  );
}

export default Movie;
