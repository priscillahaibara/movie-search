import { useNavigate } from "react-router-dom";
import styles from "./MovieHeader.module.css";

function MovieHeader({ title, year, genre, rating }) {
  const navigate = useNavigate();
  const handleReturn = () => {
    navigate(-1)
  };

  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <button type="button" onClick={handleReturn}>
          <ion-icon
            name="arrow-undo-outline"
            className={styles.icon}
          ></ion-icon>
        </button>
        <h2>
          {title} <span>({year})</span>
        </h2>
        <ion-icon name="star-outline" className={styles.icon}></ion-icon>
      </div>

      {/* Rating */}
      <div className={styles.meta}>
        <div className={styles.rating}>
          <div className={styles.ratingValue}>{rating}</div>
          <span className={styles.ratingLabel}>Rating</span>
        </div>

        {/* Genres */}
        <div className={styles.genre}>{genre}</div>
      </div>
    </header>
  );
}

export default MovieHeader;
