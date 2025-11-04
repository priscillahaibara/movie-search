/* import useMovieGenre from "../hooks/useMovieGenre"; */
import useMovies from "../hooks/useMovies";
import styles from "./TopSection.module.css";
import Spinner from './Spinner';
import MovieCard from "./MovieCard";

function TopSection({ media }) {
  const { data, error, isLoading } = useMovies({type: 'tmdbTopRated', media});

  return (
    <section className={styles.top}>
      <div className="borderTop"></div>
      <h3>Top {media === "tv" ? "TV series" : "movies"}</h3>
      <div>{isLoading && <Spinner />}</div>
      <ul className={styles.scrollContainer}>{data.map((movie) => (<MovieCard movie={movie} key={movie.id}/>))}</ul>
    </section>
  );
}

export default TopSection;
