import React from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="w-[20%] min-h-screen text-white border-r-2 border-zinc-200 p-10">
      <h1 className="text-white text-2xl font-bold ">
        <i className="ri-tv-fill text-[#6556CD] mr-2"></i>
        <span>SCSDB</span>
      </h1>
      <nav className="flex flex-col gap-5 text-zinc-400 text-2xl">
        <h1 className="text-white font-bold text-2xl mt-10 nb-5">New Feeds</h1>
        <Link
          to="/trending"
          className="hover:bg-[#6556CD] hover:text-white font-semibold rounded-lg p-6 duration-300"
        >
          <i className="mr-2 ri-fire-fill"></i>
          Trending
        </Link>
        <Link
          to="/popular"
          className="hover:bg-[#6556CD] hover:text-white font-semibold rounded-lg p-6 duration-300"
        >
          <i className="mr-2 ri-bard-fill"></i>
          Popular
        </Link>
        <Link
          to="/movies"
          className="hover:bg-[#6556CD] hover:text-white font-semibold rounded-lg p-6 duration-300"
        >
          <i className="mr-2 ri-movie-2-fill"></i>
          Movies
        </Link>
        <Link
          to="/shows"
          className="hover:bg-[#6556CD] hover:text-white font-semibold rounded-lg p-6 duration-300"
        >
          <i className="mr-2 ri-tv-2-fill"></i>
          TV Shows
        </Link>
        <Link
          to="/people"
          className="hover:bg-[#6556CD] hover:text-white font-semibold rounded-lg p-6 duration-300"
        >
          <i className="mr-2 ri-team-fill"></i>
          People
        </Link>
      </nav>
      <hr className="mt-3" />
      <nav className="flex flex-col gap-5 text-zinc-400 text-2xl">
        <h1 className="text-white font-bold text-2xl mt-10 nb-5">
          Website Information
        </h1>
        <Link className="hover:bg-[#6556CD] hover:text-white font-semibold rounded-lg p-6 duration-300">
          <i className="mr-2 ri-information-2-fill"></i>
          About SCSDB
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white font-semibold rounded-lg p-6 duration-300">
          <i className="mr-2 ri-phone-fill"></i>
          Contact Us
        </Link>
      </nav>
    </div>
  );
};

export default SideNav;
