function SearchBar({ search, setSearch }) {
  return (
    <div className="search-box">

      <input
        type="text"
        placeholder="🔍 Search your favourite ice cream..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

    </div>
  );
}

export default SearchBar;