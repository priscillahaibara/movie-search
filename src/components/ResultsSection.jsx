import styles from "./ResultsSection.module.css";

function MovieCard({movie}) {
  return (
    <li>
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
      <p></p>
      <ul>
        {data.map(movie => (
          <MovieCard key={movie.imdbID} movie={movie}/>
        ))}
      </ul>
    </section>
  );
}

export default ResultsSection;