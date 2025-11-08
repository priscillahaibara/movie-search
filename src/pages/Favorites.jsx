import styles from "./Favorites.module.css";
import useMovies from "../hooks/useMovies";
import MovieCard from "../components/MovieCard";
import Spinner from "../components/Spinner";

function Favorites() {
  const { savedMovies, error, isLoading } = useMovies({ type: "favorites" });

  return (
    <main className={styles.favorites}>
      <h1>Favorites</h1>
      <div className="borderTop"></div>

      {isLoading && <Spinner />}

      {!isLoading && error && (
        <p className={styles.error}>
          ⚠️ Something went wrong: {error.message || null}
        </p>
      )}

      {!isLoading && !error && savedMovies?.length === 0 && (
        <p className={styles.empty}>You don’t have any favorite movies yet.</p>
      )}

      <section className={styles.sectionFavorites}>
        {savedMovies.map((movie) => (
          <MovieCard movie={movie} key={movie.imdbID} />
        ))}
      </section>
    </main>
  );
}

export default Favorites;
