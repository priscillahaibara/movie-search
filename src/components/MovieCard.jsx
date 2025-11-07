import styles from "./MovieCard.module.css";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  const title = movie.Title || movie.title || movie.name || "Untitled";
  const id = movie.imdbID || movie.id;
  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : movie.Poster;

  return (
    <li className={styles.movieCard}>
      <Link to={`/search/${id}`}>
        <img src={poster} alt={title} />
        <p>{title}</p>
      </Link>
    </li>
  );
}

export default MovieCard;
