import { useParams } from "react-router-dom";
import styles from "./Movie.module.css";
import useMovieDetails from "../hooks/useMovieDetails";
import MoviePoster from "../components/MoviePoster";
import MovieHeader from "../components/MovieHeader";
import MovieInfo from "../components/MovieInfo";
import MovieCast from "../components/MovieCast";
import useMovieCast from "../hooks/useMovieCast";

function Movie() {
  const { id } = useParams();
  const { data } = useMovieDetails(id);
  const { cast } = useMovieCast(data?.imdbID);

  return (
    <main>
      <MoviePoster data={data} />
      <MovieHeader data={data} />
      <MovieInfo data={data} />
      <MovieCast data={data}/>
    </main>
  );
}

export default Movie;
