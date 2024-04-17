function Search({ setQuery }) {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search songs..."
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

export default Search;
