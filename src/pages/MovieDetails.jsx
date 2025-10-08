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
      <div
        className={styles.posterContainer}
        style={posterContainerStyle}
      >
        <img src={data.Poster} />
      </div>
      <div className={styles.content}>
        <h2>{data.Title} <span>({data.Year})</span></h2>
        <p className={styles.plot}>{data.Plot}</p>
      </div>
    </section>
  );
}

export default MovieDetails;
