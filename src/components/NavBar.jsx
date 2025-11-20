import styles from "./NavBar.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { genreMap, capitalizeFirstLetter } from "../utils/helpers";
import Logo from "./Logo";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMoviesOpen, setIsMoviesOpen] = useState(false);
  const [isSeriesOpen, setIsSeriesOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

  function toggleSubmenu(media) {
    if (media === "movies") {
      setIsMoviesOpen((m) => !m);
    } else if (media === "series") {
      setIsSeriesOpen((s) => !s);
    }
  }

  return (
    <>
      {isOpen && <div className={styles.overlay} onClick={closeMenu}></div>}

      <nav className={styles.navbar}>
        <Logo />

        <button onClick={toggleMenu}>
          <ion-icon
            name={isOpen ? "close" : "menu"}
            className={styles.hamburger}
          ></ion-icon>
        </button>

        <ul className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
          <li>
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>

          <li
            className={styles.hasSubmenu}
            onClick={() => toggleSubmenu("movies")}
          >
            <div>
              <span>Movies</span>
            </div>

            <ul
              className={`${styles.submenu} ${isMoviesOpen ? styles.show : ""}`}
            >
              {Object.keys(genreMap.movie).map((genre) => (
                <li key={genre}>
                  <Link to={`/movie/${genre}`} onClick={toggleMenu}>
                    {capitalizeFirstLetter(genre)}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li>
            <Link to="/favorites" onClick={toggleMenu}>
              Favorites
            </Link>
          </li>

          <li>
            <Link to="/settings" onClick={toggleMenu}>
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;

/* import { NavLink } from "react-router-dom";
import { useState } from "react";
import styles from "./NavBar.module.css";
import Menu from "./Menu";

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu((m) => !m);
  }

  return (
    <>
      <nav className={styles.nav}>
        <NavLink to="/" className={styles.logo}>
          CineDB
        </NavLink>

        <button onClick={toggleMenu}>
          <ion-icon name="menu" className={styles.hamburger}></ion-icon>
        </button>

        <Menu isOpen={showMenu} toggleMenu={toggleMenu} />
      </nav>
    </>
  );
}

export default NavBar;
 */
