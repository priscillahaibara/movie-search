import { useParams } from "react-router-dom";
import styles from "./MovieDetails.module.css";
import useMovieDetails from "../hooks/useMovieDetails";

function MovieDetails() {
  const { id } = useParams();
  const {data, error, isLoading} = useMovieDetails(id);

  return (
    <section>
      <h2>{data.Title}</h2>
      <p>{data.Plot}</p>
    </section>
  );
}

export default MovieDetails;
