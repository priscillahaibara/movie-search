import styles from "./MovieCast.module.css";

function MovieCast({ cast }) {
  if (!cast?.length) return null;

  return (
    <section className={styles.cast}>
      <h3>Cast</h3>
      <ul>
        {cast.map((actor) => (
          <MovieActor actor={actor} key={actor.id}/>
        ))}
      </ul>
    </section>
  );
}

function MovieActor({ actor }) {
  return (
    <li className={styles.actor}>
      <img src={`https://image.tmdb.org/t/p/w92${actor.profile_path}`} />
      <h4>{actor.name}</h4>
    </li>
  );
}

export default MovieCast;
