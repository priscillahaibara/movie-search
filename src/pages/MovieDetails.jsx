import { useParams } from "react-router-dom";
import styles from "./MovieDetails.module.css";
import useMovieDetails from "../hooks/useMovieDetails";

function MovieDetails() {
  const { id } = useParams();
  const { data } = useMovieDetails(id);

  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${data.Poster})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <main>
      {/* Hero / Poster */}
      <section className={styles.hero} style={heroStyle}>
        {console.log(data)}
        <img src={data.Poster} alt={data.Title} />
      </section>

      {/* Movie Info */}
      <section className={styles.info}>
        <header className={styles.header}>
          <h2>
            {data.Title} <span>({data.Year})</span>
          </h2>

          {/* Rating */}
          <div className={styles.meta}>
            <div className={styles.rating}>
              <div className={styles.ratingValue}>{data.imdbRating}</div>
              <span className={styles.ratingLabel}>IMDb Rating</span>
            </div>

            {/* Genres */}
            <div className={styles.genre}>{data.Genre}</div>
          </div>
        </header>

        {/* Plot */}
        <p className={styles.plot}>{data.Plot}</p>
      </section>
    </main>
  );
}

export default MovieDetails;
