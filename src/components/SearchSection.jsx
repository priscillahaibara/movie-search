function SearchSection() {
  return (
    <section className="search">
      <h1 className="search__title">Movie Search App</h1>
      <h2 className="search__subtitle">
        Here you can find your favorite movies.
      </h2>
      <input
        type="text"
        className="search__input"
        placeholder="Search for a movie..."
      />
    </section>
  );
}

export default SearchSection;
