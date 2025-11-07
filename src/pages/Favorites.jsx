import useMovies from "../hooks/useMovies";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const { savedMovies } = useMovies({ type: "favorites" });

  return (
    <main>
      <h1>Favorites</h1>
      <section>
        {savedMovies.map((movie) => (
          <MovieCard movie={movie} key={movie.imdbID} />
        ))}
      </section>
    </main>
  );
}

export default Favorites;
