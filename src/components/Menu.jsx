import styles from "./Menu.module.css";

function Menu({ isOpen, toggleMenu }) {
  return (
    <>
      <div
        className={`${styles.overlay} ${isOpen ? styles.show : ''}`}
        onClick={toggleMenu}
      ></div>

      <ul className={`${styles.menu} ${isOpen ? styles.show : ''}`}>
        <button onClick={toggleMenu} className={styles.closeBtn}>
          <ion-icon name="close-outline"></ion-icon>
        </button>
        <li>Favorites</li>
        <li>Settings</li>
      </ul>
    </>
  );
}

export default Menu;
