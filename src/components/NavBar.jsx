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
        <button onClick={toggleMenu}>
          <ion-icon name={showMenu ? "close" : "menu"} className={styles.icon}></ion-icon>
        </button>

        <div>
          <button onClick={toggleTheme} style={{marginRight: '2rem'}}>
            <ion-icon
              name={theme === "light" ? "moon-outline" : "sunny-outline"} className={styles.icon}
            ></ion-icon>
          </button>
          <NavLink to="/" className={styles.logo}>
            CineDB
          </NavLink>
        </div>
      </nav>

      <Menu isOpen={showMenu} toggleMenu={toggleMenu} />
    </>
  );
}

export default NavBar;
