import useMovies from "../hooks/useMovies";
import styles from "./MovieSection.module.css";
import Spinner from "./Spinner";
import MovieCard from "./MovieCard";

function MovieSection({ title, type, media }) {
  const { data: movies, error, isLoading } = useMovies({ type, media });

  return (
    <section className={styles.movieSection}>
      <h3>{title}</h3>
      <div className="borderTop"></div>

      {isLoading && <Spinner />}

      {error && !isLoading && <p>⚠️ Something went wrong: {error.message || error.toString()}</p> }

      {!error && !isLoading && movies?.length === 0 && <p>No movies found.</p>}
      
      <ul className={styles.scrollContainer}>
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </ul>
    </section>
  );
}

export default MovieSection;
