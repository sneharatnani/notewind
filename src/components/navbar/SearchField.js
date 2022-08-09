import { useEffect } from "react";
import SearchIcon from "../../assets/icons/SearchIcon.js";
import XIcon from "../../assets/icons/XIcon.js";

export default function SearchField({ setQuery, query }) {
  useEffect(() => {
    function handleChange(e) {
      if (e.target.tagName === "A") {
        setQuery("");
      }
    }
    document.body.addEventListener("click", handleChange);
    return () => {
      document.body.removeEventListener("click", handleChange);
    };
  }, [setQuery]);

  return (
    <div className="w-full flex md:ml-0 items-center">
      <label htmlFor="search-field" className="sr-only">
        Search
      </label>
      <div className="relative w-full text-gray-400 focus-within:text-gray-600">
        <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
          <SearchIcon props="h-5 w-5 fill-gray-600" />
        </div>
        <input
          id="search-field"
          className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
          placeholder="Search"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      {query && (
        <button onClick={() => setQuery("")}>
          <XIcon props="stroke-gray-600 h-5 w-5" />
        </button>
      )}
    </div>
  );
}
