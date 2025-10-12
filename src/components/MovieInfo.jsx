import styles from "./MovieInfo.module.css";

function MovieInfo({ data }) {
  return (
    <section className={styles.info}>
      {/* Plot */}
      <p className={styles.plot}>{data.Plot}</p>

      
    </section>
  );
}

export default MovieInfo;
