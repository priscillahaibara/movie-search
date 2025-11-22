import styles from "./NavBar.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { genreMap, capitalizeFirstLetter } from "../utils/helpers";
import Logo from "./Logo";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [moviesOpen, setMoviesOpen] = useState(false);
  const [seriesOpen, setSeriesOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const closeMenu = () => {
    setMenuOpen(false);
    setMoviesOpen(false);
    setSeriesOpen(false);
  };

  const toggleSubmenu = (type) => {
    if (type === "movies") setMoviesOpen((prev) => !prev);
    if (type === "series") setSeriesOpen((prev) => !prev);
  };

  return (
    <>
      {menuOpen && <div className={styles.overlay} onClick={closeMenu}></div>}

      <header className={styles.header}>
        <Logo />

        <button onClick={toggleMenu} className={styles.iconButton}>
          <ion-icon name="menu" class={styles.hamburger} />
        </button>

        <ul className={`${styles.menu} ${menuOpen ? styles.open : ""}`}>
          <button onClick={closeMenu}>
            <ion-icon name="close" class={styles.close} />
          </button>

          <li className={styles.menuItem}>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>

          <li
            className={styles.hasSubmenu}
            onClick={() => toggleSubmenu("movies")}
          >
            <div className={styles.menuItem}>
              <span>Movies</span>
            </div>

            <ul
              className={`${styles.submenu} ${moviesOpen ? styles.show : ""}`}
            >
              {Object.keys(genreMap.movie).map((genre) => (
                <li key={genre} className={styles.genreItem}>
                  <Link to={`/movie/${genre}`} onClick={closeMenu}>
                    {capitalizeFirstLetter(genre)}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li
            className={styles.hasSubmenu}
            onClick={() => toggleSubmenu("series")}
          >
            <div className={styles.menuItem}>
              <span>Series</span>
            </div>

            <ul
              className={`${styles.submenu} ${seriesOpen ? styles.show : ""}`}
            >
              {Object.keys(genreMap.tv).map((genre) => (
                <li key={genre} className={styles.genreItem}>
                  <Link to={`/tv/${genre}`} onClick={closeMenu}>
                    {capitalizeFirstLetter(genre)}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li className={styles.menuItem}>
            <Link to="/favorites" onClick={closeMenu}>
              Favorites
            </Link>
          </li>

          <li className={styles.menuItem}>
            <Link to="/settings" onClick={closeMenu}>
              Settings
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
}

export default NavBar;
