import React, { useState } from "react";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";
import noimg from "/Noimg.jpg";

const HorizontalCards = ({ data }) => {
  const [category, setCategory] = useState("all");
  const filteredData =
    category === "all"
      ? data
      : data.filter((item) => item.media_type === category);

  return (
    <div className="w-full h-[35vh] relative">
      <div className="flex items-center justify-between py-5 px-7">
        <h1 className="text-3xl font-bold px-4 py-2 capitalize rounded-xl w-fit text-zinc-100 bg-[#6556cd]">
          Trending
        </h1>

        <DropDown
          title="Filter"
          options={[
            { value: "tv", label: "TV" },
            { value: "movie", label: "Movie" },
            { value: "all", label: "All" },
          ]}
          onChange={(value) => setCategory(value)}
        />
      </div>
      <div className="HorizontalCards w-full h-[80%] flex overflow-x-auto px-5">
        {filteredData.map((item) => (
          <div key={item.id} className="min-w-[15%] mr-5">
            <Link to={`/${item.media_type}/details/${item.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/original/${
                  item.backdrop_path || item.profile_path || noimg
                }`}
                alt="Media image"
                className="w-full h-[55%] object-cover"
              />
              <h1 className="text-xl font-bold mb-3">
                {item.name ||
                  item.title ||
                  item.original_name ||
                  item.original_title}
              </h1>
            </Link>
            <p className="w-[70%] mt-5 text-lg text-white">
              {item.overview ? item.overview.slice(0, 35) : "No description"}
              {item.overview && item.overview.length > 35 ? "..." : ""}
              <Link
                to={`/${item.media_type}/details/${item.id}`}
                className="text-blue-600"
              >
                more
              </Link>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalCards;
