import FavoritesSection from "../components/FavoritesSection";
import ResultsSection from "../components/ResultsSection";
import SearchSection from "../components/SearchSection";

function Home() {
  return (
    <main>
      <SearchSection />
      <ResultsSection />
      <FavoritesSection />
    </main>
  );
}

export default Home;
