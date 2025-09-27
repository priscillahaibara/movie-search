import styles from "./SearchSection.module.css";

function SearchSection() {
  return (
    <section className={styles.search}>
      <h1>Movie Search App</h1>
      <h2>Here you can find your favorite movies.</h2>
      <div className={styles.inputWrapper}>
        <input type="text" placeholder="Search for a movie..." />
        <ion-icon name="search-outline" className={styles.searchIcon}></ion-icon>
      </div>
    </section>
  );
}

export default SearchSection;
