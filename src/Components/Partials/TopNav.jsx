import axios from "../../utils/Axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noimg from "../../assests/noimg.webp";

function TopNav() {
  
  document.title = "SCSDB | MOVIE APP";
  const [query, setquery] = useState("");
  //console.log(query);
  const [Searches, setSearches] = useState([]);

  const getSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      // console.log(data);
      setSearches(data.results);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    getSearches();
  }, [query]);

  return (
    <div className="w-full h-[10vh] flex items-center justify-center relative">
      <i className="text-zinc-400 text-3xl cursor-pointer ri-search-line"></i>
      <input
        onChange={(e) => setquery(e.target.value)}
        value={query}
        type="text"
        placeholder="search anything here"
        className="w-[50%] text-zinc-200 mx-3 px-5 py-3 text-xl outline-none border-[2px] border-zinc-600 rounded-xl bg-transparent"
      />
      {query.length > 0 && (
        <i
          onClick={() => setquery("")}
          className="text-zinc-200 text-4xl cursor-pointer ri-close-fill durationo-100"
        ></i>
      )}

      <div className="absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[90%] overflow-auto rounded-xl">
        {Searches &&
          Searches.map((search, index) => (
            <Link
              key={index}
              className="hover:text-white hover:bg-[#6565CD] duration-300 font-bold text-2xl text-zinc-600 p-10 flex gap-10 justify-start items-center border-b-2 border-white w-full shadow-lg"
            >
              <img
                className="w-[15vh] aspect-square object-cover rounded-lg hover:scale-110"
                src={search.backdrop_path || search.profile_path ? `https://image.tmdb.org/t/p/original/${search.backdrop_path || search.profile_path}` : noimg}
                alt=""
              />
              <span className="text-3xl font-bold">
                {search.original_title || search.title || search.original_name}
              </span>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default TopNav;