import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import styles from "./NavBar.module.css";
import Menu from "./Menu";

function NavBar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu((m) => !m);
  }

  return (
    <>
      <nav className={styles.nav}>
        {/* <button onClick={toggleTheme}>
        <ion-icon
          name={theme === "light" ? "moon-outline" : "sunny-outline"}
        ></ion-icon>
      </button> */}

        <button onClick={toggleMenu}>
          <ion-icon name={showMenu ? "close" : "menu"}></ion-icon>
        </button>
        <NavLink to="/" className={styles.logo}>
          CineDB
        </NavLink>
      </nav>

      <Menu isOpen={showMenu} toggleMenu={toggleMenu} />
    </>
  );
}

export default NavBar;
