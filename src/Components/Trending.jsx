import React from "react";
import SideNav from "./partials/SideNav";
import TopNav from "./partials/TopNav";
import DropDown from "./partials/DropDown";
import { useNavigate } from "react-router-dom";

const Trending = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full flex">
      <SideNav />
      <div className="w-[80%]">
        <div className="w-full flex items-center">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line text-4xl  cursor-pointer"
          ></i>
          <TopNav left={21} />
          <DropDown
            title="Filter"
            options={[
              { value: "tv", label: "TV" },
              { value: "movie", label: "Movie" },
              { value: "all", label: "All" },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Trending;
