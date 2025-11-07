import styles from "./MenuSection.module.css";

function MenuSection({ onToggle, media, isOpen, children }) {
  return (
    <>
      <li onClick={onToggle}>
        <span className={styles.genres}>{media}</span>
        <ion-icon
          name={isOpen ? "chevron-up-outline" : "chevron-down-outline"}
          className={styles.chevronIcon}
        ></ion-icon>
      </li>
      {isOpen && <ul className={styles.genresList}>{children}</ul>}
    </>
  );
}

export default MenuSection;
