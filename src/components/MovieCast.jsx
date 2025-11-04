import useMovies from "../hooks/useMovies";
import styles from "./MovieCast.module.css";

function MovieCast({ id }) {
  
  const {data, error, isLoading} = useMovies({id, type: 'tmdbCast'})

  return (
    <section className={styles.cast}>
      <h3>Cast</h3>
      <ul>
        {data.map((actor) => (
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
