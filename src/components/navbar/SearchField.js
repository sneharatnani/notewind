import searchIcon from "../../assets/icons/search.svg";
import x from '../../assets/icons/x.svg';

export default function SearchField({setSearchValue,searchValue}) {
  return (
    <div className="w-full flex md:ml-0">
      <label htmlFor="search-field" className="sr-only">
        Search
      </label>
      <div className="relative w-full text-gray-400 focus-within:text-gray-600">
        <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
          <img
            src={searchIcon}
            alt="search icon"
            className="h-5 w-5"
            aria-hidden="true"
          />
        </div>
        <input
          id="search-field"
          className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
          placeholder="Search"
          type="text"
          value={searchValue}
          onChange={(e)=> setSearchValue(e.target.value)}
              />
              <img src={ x} className="text-black"/>
      </div>
    </div>
  );
}
