import styles from "./ResultsSection.module.css";
import Spinner from "./Spinner";
import MovieCard from "./MovieCard";

function ResultsSection({ data, error, isLoading }) {
  return (
    <section className={styles.results}>
      <div className="borderTop"></div>
      <h3>Movies List</h3>
      <div>{isLoading && <Spinner />}</div>
      <p>{error && data.length === 0 ? error : null}</p>
      <ul className={styles.scrollContainer}>
        {data.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </ul>
    </section>
  );
}

export default ResultsSection;
