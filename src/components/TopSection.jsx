import useMovieGenre from "../hooks/useMovieGenre";
import styles from "./TopSection.module.css";
import Spinner from './Spinner';
import MovieCard from "./MovieCard";

function TopSection({ type }) {
  const { data, error, isLoading } = useMovieGenre(type);

  return (
    <section className={styles.top}>
      <div className="borderTop"></div>
      <h3>Top {type === "tv" ? "TV series" : "movies"}</h3>
      <div>{isLoading && <Spinner />}</div>
      <ul className={styles.scrollContainer}>{data.map((movie) => (<MovieCard movie={movie} key={movie.id}/>))}</ul>
    </section>
  );
}

export default TopSection;
