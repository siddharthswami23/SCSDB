import React from "react";
import { Link } from "react-router-dom";

const Header = ({ WallPaper }) => {
  // console.log(WallPaper);
  if (!WallPaper) {
    return null;
  }

  return (
    <div
      className="w-full h-[48vh] flex flex-col justify-center p-[10%]"
      style={{
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${
          WallPaper.backdrop_path || WallPaper.profile_path || ""
        })`,
      }}
    >
      <h1 className="w-[70%] text-5xl text-white font-bold text-left">
        {WallPaper.name ||
          WallPaper.original_name ||
          WallPaper.title ||
          WallPaper.original_title}
      </h1>
      <p className="w-[70%] mt-3 text-xl text-white">
        {WallPaper.overview.slice(0, 300)}...
        <Link className="text-blue-600">more</Link>
      </p>
      <p className="text-white mt-5">
        <i className="text-yellow-500 text-2xl ri-megaphone-fill"></i>
        {WallPaper.release_date ||
          WallPaper.first_air_date ||
          WallPaper.known_for_department}
        <i className="text-yellow-500 text-2xl ri-album-fill"></i>
        {WallPaper.media_type.toUpperCase()}
      </p>
      <Link className="p-4 rounded-sm mt-10 bg-[#6556CD] w-fit font-semibold text-xl whitespace-nowrap">
        Watch Trailer
      </Link>
    </div>
  );
};

export default Header;
