import HeroSection from "../components/HeroSection";
import SearchSection from "../components/SearchSection";
import ResultsSection from "../components/ResultsSection";
import TopSection from "../components/TopSection";
import useMovies from "../hooks/useMovies";
import { useState } from "react";

function Home() {
  const [query, setQuery] = useState("");
  const { data, error, isLoading } = useMovies({ type: "omdbSearch", query });

  return (
    <main>
      <HeroSection />
      <SearchSection query={query} setQuery={setQuery} suggestions={data} />
      <ResultsSection data={data} error={error} isLoading={isLoading} />
      <TopSection media="tv" />
      <TopSection media="movie" />
    </main>
  );
}

export default Home;
