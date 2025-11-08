import useMovies from "../hooks/useMovies";
import styles from "./MovieCast.module.css";
import Spinner from "./Spinner";

function MovieCast({ id }) {
  const { data, error, isLoading } = useMovies({ id, type: "tmdbCast" });

  return (
    <section className={styles.cast}>
      <h3>Cast</h3>

      {isLoading && <Spinner />}

      {error && !isLoading && !data?.length ? (
        <p>⚠️ Something went wrong: {error.message || error.toString()}</p>
      ) : null}

      {!isLoading &&
        !error &&
        (data?.length ? (
          <ul>
            {data.map((actor) => (
              <MovieActor actor={actor} key={actor.id} />
            ))}
          </ul>
        ) : (
          <p className={styles.empty}>No cast information available.</p>
        ))}
    </section>
  );
}

function MovieActor({ actor }) {
  return (
    <li className={styles.actor}>
      <img src={`https://image.tmdb.org/t/p/w92${actor.profile_path}`} alt={actor.name}/>
      <h4>{actor.name}</h4>
    </li>
  );
}

export default MovieCast;
