import styles from "./MovieInfo.module.css";

function MovieInfo({ data }) {
  return (
    <section className={styles.info}>
      <p className={styles.plot}>{data.Plot}</p>

      <div className={styles.details}>
        <p><strong>Director: </strong>{data.Director}</p>
        <p><strong>Runtime: </strong>{data.Runtime}</p>
        <p><strong>Awards: </strong>{data.Awards}</p>
      </div>
    </section>
  );
}

export default MovieInfo;
