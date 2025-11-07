import styles from "./Favorites.module.css";
import useMovies from "../hooks/useMovies";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const { savedMovies } = useMovies({ type: "favorites" });

  return (
    <main className={styles.favorites}>
      <h1>Favorites</h1>
      <div className="borderTop"></div>
      <section className={styles.sectionSettings}></section>
      <section className={styles.section}>
        {savedMovies.map((movie) => (
          <MovieCard movie={movie} key={movie.imdbID} />
        ))}
      </section>
    </main>
  );
}

export default Favorites;
