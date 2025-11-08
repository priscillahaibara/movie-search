import styles from "./Genres.module.css";
import { useParams } from "react-router-dom";
import useMovies from "../hooks/useMovies";
import { capitalizeFirstLetter, genreMap } from "../utils/helpers";
import MovieCard from "../components/MovieCard";

function Genres() {
  const { media, genre } = useParams();
  const genreId = genreMap[media]?.[genre];
  const { data: movies, isLoading, error } = useMovies({
    type: "tmdbByGenre",
    media,
    genreId,
  });

  return (
    <main className={styles.genres}>
      <h1>{capitalizeFirstLetter(genre)}</h1>
      <div className="borderTop"></div>
      <section className={styles.sectionGenres}>{movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie}/>)}</section>
    </main>
  );
}

export default Genres;
