import styles from "./ResultsSection.module.css";
import Spinner from "./Spinner";
import MovieCard from "./MovieCard";

function ResultsSection({ data, error, isLoading }) {
  return (
    <section className={styles.results}>
      <div className="borderTop"></div>
      <h3>Movies List</h3>

      {isLoading && <Spinner />}

      {error && !data?.length ? (
        <p className={styles.error}>
          ⚠️ Something went wrong: {error.message || error.toString()}
        </p>
      ) : null}

      <ul className={styles.scrollContainer}>
        {data.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </ul>
    </section>
  );
}

export default ResultsSection;
