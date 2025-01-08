import axios from "../../utils/Axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TopNav = ({ left }) => {
  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const getSearches = async () => {
    try {
      const response = await axios.get(`search/multi?query=${query}`);
      setSearches(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (query) {
      getSearches();
    }
  }, [query]);

  return (
    <div className="w-full h-[10vh] relative flex items-center justify-start pl-[15%]">
      <i className="ri-search-line text-zinc-400 text-4xl cursor-pointer"></i>
      <input
        onChange={(e) => {
          setIsOpen(true);
          setQuery(e.target.value);
        }}
        value={query}
        className="w-1/2 text-zinc-800 mx-5 px-5 pt-2 pb-3 outline-none text-3xl border-none bg-white rounded-xl"
        type="text"
        placeholder="Search anything"
      />
      {query.length > 0 ? (
        <i
          onClick={() => {
            setIsOpen(false);
            setQuery("");
          }}
          className="ri-close-fill text-zinc-400 text-4xl cursor-pointer"
        ></i>
      ) : (
        ""
      )}

      {isOpen && query.length > 0 && (
        <div
          className="search-box absolute top-[90%] w-[42%] max-h-[50vh] bg-white overflow-y-auto rounded-md"
          style={{ left: `${left}%` }}
        >
          {searches && searches.length > 0 ? (
            searches.map((item, index) => (
              <Link
                key={index}
                to={`/${item.media_type}/${item.id}`}
                className="w-full h-[12vh] bg-zinc-200 flex items-center justify-between border-b-2 border-zinc-100 text-xl p-5 text-zinc-700 font-semibold hover:text-zinc-900 hover:bg-zinc-300"
              >
                <img
                  className="w-[10vh] aspect-square object-cover shadow-lg"
                  src={
                    item.backdrop_path || item.profile_path
                      ? `https://image.tmdb.org/t/p/original/${
                          item.backdrop_path || item.profile_path
                        }`
                      : "https://imgs.search.brave.com/8kwN061cgAWpvKSXBhLE47hkZGaURSvPm3EXX2_qV3U/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzg5LzU1LzE1/LzM2MF9GXzg5NTUx/NTk2X0xkSEFaUnd6/M2k0RU00SjBOSE5I/eTJoRVVZRGZYYzBq/LmpwZw"
                  }
                  alt={item.title || item.name || "No image available"}
                />
                <p>
                  {item.name ||
                    item.original_name ||
                    item.title ||
                    item.original_title}
                </p>
              </Link>
            ))
          ) : (
            <p className="text-center p-5 text-zinc-700">
              No results found for "{query}"
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default TopNav;
