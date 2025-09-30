import SearchSection from "../components/SearchSection";
import ResultsSection from "../components/ResultsSection";
import FavoritesSection from "../components/FavoritesSection";
import useFetch from "../hooks/useFetch";
import { useState } from "react";

function Home() {
  const OMDB_API_KEY = import.meta.env.VITE_API_KEY;
  const [query, setQuery] = useState("");
  const url = query
    ? `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${query}`
    : "";
  const { data, error, isLoading } = useFetch(url);

  return (
    <main>
      <SearchSection query={query} setQuery={setQuery} />
      <ResultsSection data={data} error={error} isLoading={isLoading} />
      <FavoritesSection />
    </main>
  );
}

export default Home;
