import { Link } from "react-router-dom";
import styles from "./ResultsSection.module.css";
import Spinner from "./Spinner";

function MovieCard({ movie }) {
  return (
    <li className={styles.movieCard}>
      <Link to={`/movie/${movie.imdbID}`}>
        <img src={`${movie.Poster}`} alt={`${movie.Title}`}/>
      </Link>
    </li>
  );
}

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
