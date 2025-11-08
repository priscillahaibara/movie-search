import styles from "./SearchSection.module.css";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function SearchSection({ query, setQuery, suggestions }) {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const wrapperRef = useRef(null);

  function handleChange(e) {
    const value = e.target.value;
    setQuery(value);
    setShowSuggestions(value.length >= 2);
  }

  function handleClickOutside(e) {
    if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
      setShowSuggestions(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
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
