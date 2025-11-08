import styles from "./Genres.module.css";
import { useParams } from "react-router-dom";
import useMovies from "../hooks/useMovies";
import { capitalizeFirstLetter, genreMap } from "../utils/helpers";
import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Genres() {
  const { media, genre } = useParams();
  const [page, setPage] = useState(1);

  const genreId = genreMap[media]?.[genre];

  const {
    data: movies,
    isLoading,
    error,
  } = useMovies({
    type: "tmdbByGenre",
    media,
    genreId,
    page,
  });

  function decreasePage() {
    setPage((p) => p - 1);
  }

  function increasePage() {
    setPage((p) => p + 1);
  }

  return (
    <main className={styles.genres}>
      <h1>{capitalizeFirstLetter(genre)}</h1>
      <div className="borderTop"></div>

      <section className={styles.sectionGenres}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </section>

      <div className={styles.pagination}>
        <button onClick={decreasePage} disabled={page === 1}>
          &larr; Prev
        </button>

        <span className={styles.pageText}>Page {page}</span>

        <button onClick={increasePage} disabled={movies.length === 0}>
          Next &rarr;
        </button>
      </div>
    </main>
  );
}

export default Genres;
