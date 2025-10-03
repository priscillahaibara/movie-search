import styles from "./ResultsSection.module.css";

function MovieCard({movie}) {
  return (
    <li className={styles.movieCard}>
      <img src={`${movie.Poster}`}/>
    </li>
  )
}

function ResultsSection({data, error, isLoading}) {
  return (
    <section className={styles.results}>
      <div className='borderTop'></div>
      <h3>Movies List</h3>
      <div>{isLoading && 'Loading...'}</div>
      <p>{error && data.length === 0 ? error : null }</p>
      <ul className={styles.scrollContainer}>
        {data.map(movie => (
          <MovieCard key={movie.imdbID} movie={movie}/>
        ))}
      </ul>
    </section>
  );
}

export default ResultsSection;