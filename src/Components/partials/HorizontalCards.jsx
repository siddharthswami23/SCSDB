import React from "react";
import { Link } from "react-router-dom";

const HorizontalCards = ({ data }) => {
  return (
    <div className="w-full h-[35vh] mt-5 ">
      <h1 className="text-3xl font-bold px-4 py-2 mb-10 capitalize rounded-xl w-fit text-zinc-100 bg-[#6556cd]">
        Trending
      </h1>
      <div className="HorizontalCards w-full h-[80%] flex overflow-x-auto px-5">
        {data.map((item, index) => (
          <div key={index} className="min-w-[15%] mr-5">
            <img
              src={`https://image.tmdb.org/t/p/original/${
                item.backdrop_path || item.profile_path || ""
              })`}
              alt=""
              className="w-full h-[55%] object-cover"
            />
            <h1 className="text-xl font-bold mb-3">
              {item.name ||
                item.title ||
                item.original_name ||
                item.original_title}
            </h1>
            <p className="w-[70%] mt-5 text-lg text-white">
              {item.overview ? item.overview.slice(0, 35) : "No description"}...
              <Link className="text-blue-600">more</Link>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalCards;
