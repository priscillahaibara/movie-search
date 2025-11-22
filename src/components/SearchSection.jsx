import styles from "./SearchSection.module.css";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function SearchSection({ query, setQuery, suggestions }) {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const containerRef = useRef();

  useEffect(() => {
    document.addEventListener("touchstart", handleClickOutside);
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleClickOutside(e) {
    if (containerRef.current && !containerRef.current.contains(e.target))
      setShowSuggestions(false);
  }

  function handleChange(e) {
    const value = e.target.value;
    setQuery(value);
    setShowSuggestions(value.length >= 2);
  }

  return (
    <section className={styles.searchSection}>
      <div className={styles.overlay}></div>
      <h1>
        The Cine<span>DB</span>
      </h1>
      <h2>Here you can find your favorite movies.</h2>
      <div className={styles.inputWrapper} ref={containerRef}>
        <input
          type="text"
          placeholder="Search for a movie..."
          value={query}
          onChange={handleChange}
          onFocus={() => query.length >= 2 && setShowSuggestions(true)}
        />
        <ion-icon
          name="search-outline"
          className={styles.searchIcon}
        ></ion-icon>

        {showSuggestions && suggestions.length > 0 && (
          <ul className={styles.suggestions}>
            {suggestions.map((movie) => (
              <Link
                to={`/search/${movie.imdbID}`}
                onClick={() => setShowSuggestions(false)}
              >
                <li key={movie.imdbID}>
                  {movie.Title} ({movie.Year})
                </li>
              </Link>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export default SearchSection;
