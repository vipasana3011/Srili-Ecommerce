function SearchBar({ search, setSearch }) {
  return (
    <div className="flex justify-center mb-12">

      <input
        type="text"
        placeholder="Search kurtis..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-xl px-6 py-4 rounded-full border border-pink-200 outline-none focus:ring-2 focus:ring-pink-300 text-lg"
      />

    </div>
  );
}

export default SearchBar;