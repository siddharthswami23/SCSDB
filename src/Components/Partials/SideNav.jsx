import { Link } from "react-router-dom";

function SideNav() {
  return (
    <div className="w-[20%] h-screen border-r-2 border-zinc-400 p-10">
      <h1 className="text-3xl font-bold text-white">
        <i className="text-[#6556CD] ri-tv-fill mr-3"></i>
        <span className="">SCSDB</span>
      </h1>
      <h1 className="text-2xl font-semibold my-5 text-white">New Feed</h1>
      <nav className="flex flex-col">
        <Link className="p-5 duration-300  hover:bg-[#6565CD] hover:text-white rounded text-zinc-400 font-regular text-xl">
          <i className="ri-fire-fill mr-4 "></i>Trending
        </Link>
        <Link className="p-5 duration-300  hover:bg-[#6565CD] hover:text-white rounded text-zinc-400 font-regular text-xl">
          <i className="ri-bard-fill mr-4 "></i>Popular
        </Link>
        <Link className="p-5 duration-300  hover:bg-[#6565CD] hover:text-white rounded text-zinc-400 font-regular text-xl">
          <i className="ri-movie-2-fill mr-4 "></i>Movies
        </Link>
        <Link className="p-5 duration-300  hover:bg-[#6565CD] hover:text-white rounded text-zinc-400 font-regular text-xl">
          <i className="ri-tv-2-fill mr-4 "></i>TV Shows
        </Link>
        <Link className="p-5 duration-300  hover:bg-[#6565CD] hover:text-white rounded text-zinc-400 font-regular text-xl">
          <i className="ri-team-fill mr-4 "></i>People
        </Link>
      </nav>
      <hr className="my-5" />
      <h1 className="text-2xl font-semibold my-5 text-white">
        Website Information
      </h1>

      <nav className="flex flex-col">
        <Link className="p-5 duration-300  hover:bg-[#6565CD] hover:text-white rounded text-zinc-400 font-regular text-xl">
          <i className="ri-information-2-fill mr-4"></i>About SCSDB
        </Link>
        <Link className="p-5 duration-300  hover:bg-[#6565CD] hover:text-white rounded text-zinc-400 font-regular text-xl">
          <i className="ri-phone-fill mr-4"></i>Contact us
        </Link>
      </nav>
    </div>
  );
}

export default SideNav;
