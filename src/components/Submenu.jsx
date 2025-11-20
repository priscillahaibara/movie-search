import styles from "./Submenu.module.css";

function Submenu({ onToggle, media, isOpen, children }) {
  return (
    <li className={styles.hasSubmenu}>
      <div className={styles.header} onClick={onToggle}>
        <span>{media}</span>
        <ion-icon
          name={isOpen ? "chevron-up-outline" : "chevron-down-outline"}
          className={styles.chevronIcon}
        ></ion-icon>
      </div>

      <ul className={`${styles.submenu} ${isOpen ? styles.open : ""}`}>
        {children}
      </ul>
    </li>
  );
}

export default Submenu;
