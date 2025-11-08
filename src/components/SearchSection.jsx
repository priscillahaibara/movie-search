import styles from "./SearchSection.module.css";
import { Link } from "react-router-dom";

function SearchSection({ query, setQuery, suggestions, onSuggestion }) {
  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <section className={styles.search}>
      <h1>Movie Search App</h1>
      <h2>Here you can find your favorite movies.</h2>
      <div className={styles.inputWrapper}>
        <input
          type="text"
          placeholder="Search for a movie..."
          value={query}
          onChange={handleChange}
        />
        <ion-icon
          name="search-outline"
          className={styles.searchIcon}
        ></ion-icon>

        {query.length >= 2 && suggestions.length > 0 && (
          <ul className={styles.suggestions}>
            {suggestions.map((movie) => (
              <li key={movie.imdbID}>
                <Link to={`/search/${movie.imdbID}`} onClick={() => onSuggestion?.(movie.Title)}>
                  {movie.Title} ({movie.Year})
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export default SearchSection;
