import styles from "./MovieInfo.module.css";

function MovieInfo({ data }) {
  const isData = Object.keys(data).length !== 0;

  return (
    <section className={styles.info}>
      {isData ? (
        <>
          <p className={styles.plot}>{data.Plot}</p>

          <div className={styles.details}>
            <p>
              <strong>Director: </strong>
              {data.Director}
            </p>
            <p>
              <strong>Runtime: </strong>
              {data.Runtime}
            </p>
            <p>
              <strong>Awards: </strong>
              {data.Awards}
            </p>
          </div>
        </>
      ) : (
        <p>Data unavailable.</p>
      )}
    </section>
  );
}

export default MovieInfo;
