import styles from "./SearchSection.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function SearchSection({ query, setQuery, suggestions }) {
  const [showSuggestions, setShowSuggestions] = useState(false);

  function handleChange(e) {
    const value = e.target.value;
    setQuery(value);
    setShowSuggestions(value.length >= 2);
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
          onFocus={() => query.length >= 2 && setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />
        <ion-icon
          name="search-outline"
          className={styles.searchIcon}
        ></ion-icon>

        {showSuggestions && suggestions.length > 0 && (
          <ul className={styles.suggestions}>
            {suggestions.map((movie) => (
              <li key={movie.imdbID}>
                <Link
                  to={`/search/${movie.imdbID}`}
                  onClick={() => setShowSuggestions(false)}
                >
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
