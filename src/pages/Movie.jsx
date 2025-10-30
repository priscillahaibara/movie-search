import { useParams } from "react-router-dom";
import styles from "./Movie.module.css";
import useMovieDetails from "../hooks/useMovieDetails";
import useMovieCast from "../hooks/useMovieCast";
import MoviePoster from "../components/MoviePoster";
import MovieHeader from "../components/MovieHeader";
import MovieInfo from "../components/MovieInfo";
import MovieCast from "../components/MovieCast";

function Movie() {
  const { id } = useParams();
  const { data } = useMovieDetails(id);
  const { cast } = useMovieCast(data?.imdbID);

  const movie = {
    title: data?.Title || data?.title,
    year: data?.Year || data?.release_date?.slice(0, 4) || 'N/A',
    genre:
      data?.Genre || (data?.genres
        ? data.genres.map((g) => g.name).join(", ")
        : "Unknown"),
    rating: data?.imdbRating || (data?.vote_average ? data.vote_average.toFixed(1) : 'N/A') 
  };

  return (
    <main className={styles.main}>
      <MoviePoster data={data} />
      <MovieHeader title={movie.title} year={movie.year} genre={movie.genre} rating={movie.rating}/>
      <MovieInfo data={data} />
      <MovieCast cast={cast} />
    </main>
  );
}

export default Movie;
