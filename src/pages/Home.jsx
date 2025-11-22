import styles from './Home.module.css'
import SearchSection from "../components/SearchSection";
import ResultsSection from "../components/ResultsSection";
import MovieSection from "../components/MovieSection";
import useMovies from "../hooks/useMovies";
import { useState } from "react";

function Home() {
  const [query, setQuery] = useState("");
  const { data, error, isLoading } = useMovies({ type: "omdbSearch", query });

  return (
    <main className={styles.home}>
      <SearchSection query={query} setQuery={setQuery} suggestions={data} />
      <ResultsSection data={data} error={error} isLoading={isLoading} />
      <MovieSection title='Latest Releases' media='movie' type='tmdbLatest'/>
      <MovieSection title='Top movies' media='movie' type='tmdbTopRated'/>
      <MovieSection title="Top series" media='tv' type='tmdbTopRated'/>
    </main>
  );
}

export default Home;
