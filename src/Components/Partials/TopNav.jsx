import { useState } from "react";
import { Link } from "react-router-dom";

function TopNav() {
  const [query, setquery] = useState("");
  console.log(query);
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

      <div className="absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[90%] overflow-auto ml-7 rounded-xl">
        {/* <Link className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 p-8 justify-start items-center border-b-2 border-zinc-100 inline-block w-full">
        <img src="" alt="" />
        <span>hello</span>
        </Link> */}
        
      </div>
    </div>
  );
}

export default TopNav;
