import { useParams } from "react-router-dom";
import styles from "./MovieDetails.module.css";
import useMovieDetails from "../hooks/useMovieDetails";

function MovieDetails() {
  const { id } = useParams();
  const { data, error, isLoading } = useMovieDetails(id);

  const posterContainerStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${data.Poster})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <section className={styles.sectionMovie}>
      {console.log(data)}
      <div className={styles.posterContainer} style={posterContainerStyle}>
        <img src={data.Poster} />
      </div>
      <div className={styles.content}>
        <div className={styles.contentBox}>
          <h2>
            {data.Title} <span>({data.Year})</span>
          </h2>
          <div className={styles.movieMeta}>
            <div className={styles.movieScoreContainer}>
              <div className={styles.movieScore}>{data.imdbRating}</div>
              <span>IMDB rating</span>
            </div>
            <div className={styles.borderRight}></div>
            <div className={styles.movieGenre}>{data.Genre}</div>
          </div>
        </div>
        <p className={styles.plot}>{data.Plot}</p>
      </div>
    </section>
  );
}

export default MovieDetails;
