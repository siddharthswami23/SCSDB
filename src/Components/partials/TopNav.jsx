import React, { useState } from "react";
import { Link } from "react-router-dom";

const TopNav = () => {
  const [query, setquery] = useState("");
  console.log(query);
  return (
    <div className="w-full h-[10vh] relative flex items-center justify-start ml-[15%]">
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

      <div className="search-box absolute top-[90%] left-[4%] w-[50%] max-h-[50vh] bg-white overflow-y-auto rounded-md">
        <Link className=" w-full h-[10vh] bg-zinc-200 flex items-center justify-center border-b-2 border-zinc-100 text-3xl text-zinc-700 font-semibold hover:text-zinc-900 hover:bg-zinc-300">
          <img src="" alt="" />
          <p>hello</p>
        </Link>
      </div>
    </div>
  );
};

export default TopNav;
