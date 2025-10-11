import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import styles from './NavBar.module.css'

function NavBar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={styles.logo}>CineDB</NavLink>
      <button onClick={toggleTheme}>
        <ion-icon
          name={theme === "light" ? "moon-outline" : "sunny-outline"}
        ></ion-icon>
      </button>
    </nav>
  );
}

export default NavBar;
