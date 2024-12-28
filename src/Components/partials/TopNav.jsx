import axios from "../../utils/Axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TopNav = () => {
  const [query, setquery] = useState("");
  const [Searches, setSearches] = useState("");
  // console.log(query);

  const GetSearches = async () => {
    try {
      const response = await axios.get(`search/multi?query=${query}`);
      setSearches(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetSearches();
  }, [query]);

  return (
    <div className="w-full h-[10vh] relative flex items-center justify-start pl-[15%] ">
      <i className="ri-search-line text-zinc-400 text-4xl cursor-pointer"></i>
      <input
        onChange={(e) => setquery(e.target.value)}
        value={query}
        className="w-1/2 text-zinc-800 mx-5 px-5 py-2 outline-none text-3xl border-none bg-white rounded-xl"
        type="text"
        placeholder="search anything"
      />
      {query.length > 0 ? (
        <i
          onClick={() => setquery("")}
          className="ri-close-fill text-zinc-400 text-4xl cursor-pointer"
        ></i>
      ) : (
        ""
      )}

      <div className="search-box absolute top-[90%] left-[19%] w-[42%] max-h-[50vh] bg-white overflow-y-auto rounded-md">
        {Searches && Searches.length > 0
          ? Searches.map((item, index) => (
              <Link
                key={index}
                className=" w-full h-[12vh] bg-zinc-200 flex items-center justify-between border-b-2 border-zinc-100 text-xl p-5 text-zinc-700 font-semibold hover:text-zinc-900 hover:bg-zinc-300"
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
                  alt=""
                />
                <p>
                  {item.name ||
                    item.original_name ||
                    item.title ||
                    item.original_title}
                </p>
              </Link>
            ))
          : ""}
      </div>
    </div>
  );
};

export default TopNav;
