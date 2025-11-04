import { useNavigate } from "react-router-dom";
import styles from "./MovieHeader.module.css";
import { loadMovie, saveMovie } from "../utils/helpers";
import { useEffect, useState } from "react";

function MovieHeader({ data }) {
  const navigate = useNavigate();
  const [isMovieSaved, setIsMovieSaved] = useState(false);

  useEffect(() => {
    const savedMovies = loadMovie();
    setIsMovieSaved(savedMovies.includes(data.imdbID));
  }, [data.imdbID]);

  const handleReturn = () => {
    navigate(-1);
  };

  const handleFavorites = (data) => {
    saveMovie(data);
    const savedMovies = loadMovie();
    setIsMovieSaved(savedMovies.includes(data.imdbID));
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
          {data.Title || "Untitled"}
          <span>{data.Year ? ` (${data.Year})` : ""}</span>
        </h2>
        <button type="button" onClick={() => handleFavorites(data)}>
          <ion-icon
            name={isMovieSaved ? "star" : "star-outline"}
            className={styles.icon}
          ></ion-icon>
        </button>
      </div>

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
