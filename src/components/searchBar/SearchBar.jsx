import { productos } from "@data/products";
import { useState } from "react";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [isSearchBarActive, setIsSearchActive] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [filteredObjects, setFilteredObjects] = useState([]);

  const handleSearchWord = (text) => {
    setSearchInput(text.target.value);
    filterObjects(text.target.value);
    setIsSearchActive(true);
  };

  const filterObjects = (input) => {
    const filtered = productos.filter((obj) =>
      obj.name.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredObjects(filtered);
  };
  return (
    <>
      <div class="relative block w-full flex-1  ">
        <input
          type="text"
          onChange={handleSearchWord}
          className={
            "bg-transparent border dark:border-blue-600 border-gray-700 text-gray-700 dark:text-gray-300  text-sm rounded-full focus:ring-gray-100 focus:border-blue-500 block w-full  p-2.5   "
          }
          placeholder="Buscar productos.."
          required
        />
        <button
          type="button"
          class="absolute inset-y-0 right-0 flex items-center pr-3"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-gray-600 dark:text-gray-200 "
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        {isSearchBarActive && searchInput !== "" && (
          <div className="absolute top-full mt-5 bg-gray-100 dark:bg-gray-700 p-2 rounded-b-md w-full">
            <div className="flex flex-col gap-2">
              {filteredObjects.map((e) => (
                <Link
                  onClick={() => setIsSearchActive(false)}
                  to={`/productos/${e.id}`}
                  key={e.id}
                  className="flex gap-2 items-center p-2 text-xs md:text-base bg-gray-200 hover:bg-gray-300  text-gray-700 dark:text-gray-100 dark:hover:bg-gray-900 dark:bg-gray-800"
                >
                  <img
                    src={e.images[0].url}
                    alt={e.name}
                    width={200}
                    height={200}
                    className="w-12 h-12 object-cover rounded-md"
                  />
                  <span>{e.name}</span>
                </Link>
              ))}
              {filteredObjects.length === 0 && (
                <div
                className="flex gap-2 items-center p-2 text-xs md:text-base bg-gray-200 hover:bg-gray-300  text-gray-700 dark:text-gray-100 dark:hover:bg-gray-900 dark:bg-gray-800"
              >
               
                <span>No se encontro ningun resultado</span>
              </div>

              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SearchBar;
