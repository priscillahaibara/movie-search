import styles from "./MoviePoster.module.css";

function MoviePoster({ data }) {
  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${data.Poster})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <section className={styles.hero} style={heroStyle}>
      <img src={data.Poster} alt={data.Title} />
    </section>
  );
}

export default MoviePoster;
