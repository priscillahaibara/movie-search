import { NavLink } from "react-router-dom";
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
        <button onClick={toggleMenu}>
          <ion-icon
            name={showMenu ? "close" : "menu"}
            className={styles.icon}
          ></ion-icon>
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
