import SearchSection from "../components/SearchSection";
import ResultsSection from "../components/ResultsSection";
import useMovieSearch from "../hooks/useMovieSearch";
import TopSection from "../components/TopSection";

function Home() {
  const OMDB_API_KEY = import.meta.env.VITE_OMDB_API_KEY;
  const {data, error, isLoading, query, setQuery} = useMovieSearch(OMDB_API_KEY);

  return (
    <main>
      <SearchSection query={query} setQuery={setQuery} />
      <ResultsSection data={data} error={error} isLoading={isLoading} />
      <TopSection type='tv'/>
      <TopSection type='movie'/>
    </main>
  );
}

export default Home;
