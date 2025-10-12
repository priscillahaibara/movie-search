import styles from "./MovieHeader.module.css";

function MovieHeader({data}) {
  return (
    <header className={styles.header}>
      <h2>
        {data.Title} <span>({data.Year})</span>
      </h2>

      {/* Rating */}
      <div className={styles.meta}>
        <div className={styles.rating}>
          <div className={styles.ratingValue}>{data.imdbRating}</div>
          <span className={styles.ratingLabel}>IMDb Rating</span>
        </div>

        {/* Genres */}
        <div className={styles.genre}>{data.Genre}</div>
      </div>
    </header>
  );
}

export default MovieHeader;
