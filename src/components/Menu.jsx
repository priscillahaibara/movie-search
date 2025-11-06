import { useState } from "react";
import styles from "./Menu.module.css";

function Menu({ isOpen, toggleMenu }) {
  const [showGenres, setShowGenres] = useState(false);
  const genres = ["Action", "Comedy", "Drama", "Horror", "Romance", "Series"];

  function handleGenres() {
    setShowGenres((g) => !g);
  }

  return (
    <>
      <div
        className={`${styles.overlay} ${isOpen ? styles.show : ""}`}
        onClick={toggleMenu}
      ></div>

      <ul className={`${styles.menu} ${isOpen ? styles.show : ""}`}>
        <button onClick={toggleMenu} className={styles.closeBtn}>
          <ion-icon name="close"></ion-icon>
        </button>

        <li onClick={handleGenres}>
          <span className={styles.genres}>Genres</span>
          <ion-icon
            name={showGenres ? "chevron-up-outline" : "chevron-down-outline"}
            className={styles.chevronIcon}
          ></ion-icon>
        </li>

        {showGenres && (
          <ul className={styles.genresList}>
            {genres.map((genre) => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>
        )}

        <li>Favorites</li>
        <li>Settings</li>
      </ul>
    </>
  );
}

export default Menu;
