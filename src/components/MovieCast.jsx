import styles from "./MovieCast.module.css";

function MovieCast({ cast }) {
  if (!cast?.length) return null;

  return (
    <section className={styles.cast}>
      <h3>Cast</h3>
      <ul>
        {cast.map((actor) => (
          <li key={actor.id}>{actor.name}
          <img src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}/>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MovieCast;
