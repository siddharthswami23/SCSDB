import React, { useEffect, useState } from "react";
import SideNav from "./partials/SideNav";
import TopNav from "./partials/TopNav";
import DropDown from "./partials/DropDown";
import { useNavigate } from "react-router-dom";
import axios from "../utils/Axios";
import Cards from "./partials/Cards";

const Trending = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [data, setData] = useState(null);

  const getTrendingData = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}`);
      setData(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTrendingData();
  }, [category, duration]);

  return (
    <div className="w-full h-full flex">
      <SideNav />
      <div className="w-[80%] max-h-screen overflow-auto px-5">
        <div className="w-full flex items-center">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line text-4xl  cursor-pointer"
          ></i>
          <TopNav left={21} />
          <DropDown
            title="Duration"
            options={[
              { value: "day", label: "Today" },
              { value: "week", label: "This Week" },
            ]}
            onChange={(value) => setDuration(value)}
          />
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
        <div className="w-full h-fit grid grid-cols-4 gap-5 mt-5 px-5 py-3">
          {data &&
            data.map((item, index) => (
              <Cards data={item} title="movies" key={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Trending;
