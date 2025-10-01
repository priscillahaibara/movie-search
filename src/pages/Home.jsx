import SearchSection from "../components/SearchSection";
import ResultsSection from "../components/ResultsSection";
import FavoritesSection from "../components/FavoritesSection";
import useMovieSearch from "../hooks/useMovieSearch";

function Home() {
  const OMDB_API_KEY = import.meta.env.VITE_API_KEY;
  const {data, error, isLoading, query, setQuery} = useMovieSearch(OMDB_API_KEY);

  return (
    <main>
      <SearchSection query={query} setQuery={setQuery} />
      <ResultsSection data={data} error={error} isLoading={isLoading} />
      <FavoritesSection />
    </main>
  );
}

export default Home;
