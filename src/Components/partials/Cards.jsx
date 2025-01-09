import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ data, title }) => {
  return (
    <Link
      to={`/${title}/details/${data.id}`}
      className="w-[35vh] h-fit p-4 shadow-lg rounded-lg bg-white"
    >
      <div>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={`https://image.tmdb.org/t/p/w500${
            data.poster_path || data.profile_path
          }`}
          alt={
            data.title ||
            data.name ||
            data.original_name ||
            "No Title Available"
          }
        />
      </div>
      <div className="mt-2">
        <h1 className="text-xl text-black font-bold mb-1">
          {data.title || data.name || data.original_name || "Untitled"}
        </h1>
        <p className="text-sm text-black">
          {data.known_for_department ||
            (data.overview
              ? data.overview.slice(0, 100)
              : "No description available")}
          {data.overview && data.overview.length > 100 && (
            <span className="text-blue-700 cursor-pointer"> more...</span>
          )}
        </p>
      </div>
    </Link>
  );
};

export default Cards;
