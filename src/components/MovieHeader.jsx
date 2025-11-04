import { useNavigate } from "react-router-dom";
import styles from "./MovieHeader.module.css";
import { saveMovie } from "../utils/helpers";
import { useState } from "react";

function MovieHeader({ data }) {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate(-1);
  };

  const handleFavorites = (data) => {
    saveMovie(data)
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
          <ion-icon name="star-outline" className={styles.icon}></ion-icon>
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
