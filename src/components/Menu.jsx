import { useState } from "react";
import styles from "./Menu.module.css";
import { Link } from "react-router-dom";
import { genreMap, capitalizeFirstLetter } from "../utils/helpers";
import MenuSection from "./MenuSection";

function Menu({ isOpen, toggleMenu }) {
  const [showMovies, setShowMovies] = useState(false);
  const [showSeries, setShowSeries] = useState(false);

  function handleToggle(media) {
    if (media === "movies") {
      setShowMovies((m) => !m);
    } else if (media === "series") {
      setShowSeries((s) => !s);
    }
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

        <MenuSection
          onToggle={() => handleToggle("movies")}
          media="Movies"
          isOpen={showMovies}
        >
          {Object.keys(genreMap.movie).map((genre) => (
            <li key={genre}>
              <Link to={`/movie/${genre}`} onClick={toggleMenu}>
                {capitalizeFirstLetter(genre)}
              </Link>
            </li>
          ))}
        </MenuSection>

        <MenuSection
          onToggle={() => handleToggle("series")}
          media="Series"
          isOpen={showSeries}
        >
          {showSeries &&
            Object.keys(genreMap.tv).map((genre) => (
              <li key={genre}>
                <Link to={`/tv/${genre}`} onClick={toggleMenu}>
                  {capitalizeFirstLetter(genre)}
                </Link>
              </li>
            ))}
        </MenuSection>

        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
    </>
  );
}

export default Menu;
