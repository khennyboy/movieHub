const Search = () => {
  return (
    <div className="relative w-2/5 rounded border-2 border-white">
      <input
        type="search"
        name="searchMovie"
        placeholder="What do you want to watch"
        className="bg- w-full bg-transparent py-2 pl-2 text-lg focus:outline-0"
      />
      <img
        src="/Search.png"
        alt="searchicon"
        className="absolute bottom-0 right-2 top-0 my-auto"
      />
    </div>
  );
};

export default Search;
