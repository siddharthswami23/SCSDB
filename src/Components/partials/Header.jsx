import React from "react";
import { Link } from "react-router-dom";

const Header = ({ data }) => {
  console.log(data);
  if (!data) {
    return null;
  }

  return (
    <div
      className="w-full h-[50vh] flex flex-col justify-center p-[10%]"
      style={{
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path || ""
        })`,
      }}
    >
      <h1 className="w-[70%] text-5xl text-white font-bold text-left">
        {data.name || data.original_name || data.title || data.original_title}
      </h1>
      <p className="w-[70%] mt-3 text-xl text-white">
        {data.overview.slice(0, 300)}...
        <Link className="text-blue-600">more</Link>
      </p>
      <p className="text-white mt-5">
        <i className="text-yellow-500 text-2xl ri-megaphone-fill"></i>
        {data.release_date || data.first_air_date || data.known_for_department}
        <i className="text-yellow-500 text-2xl ri-album-fill"></i>
        {data.media_type.toUpperCase()}
      </p>
      <Link className="p-4 rounded-sm mt-10 bg-[#6556CD] w-[12%] font-semibold text-xl">
        Watch Trailer
      </Link>
    </div>
  );
};

export default Header;
