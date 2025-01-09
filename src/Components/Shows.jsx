import React, { useEffect, useState } from "react";
import SideNav from "./partials/SideNav";
import TopNav from "./partials/TopNav";
import DropDown from "./partials/DropDown";
import { useNavigate } from "react-router-dom";
import axios from "../utils/Axios";
import Cards from "./partials/Cards";

const Shows = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("airing_today");
  const [data, setData] = useState(null);

  const getShowsData = async () => {
    try {
      const { data } = await axios.get(`/tv/${category}`);
      setData(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getShowsData();
  }, [category]);

  return (
    <div className="w-full h-full flex">
      <SideNav />
      <div className="w-[80%] max-h-screen overflow-auto px-5">
        <div className="w-full flex items-center">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line text-4xl  cursor-pointer"
          ></i>
          <TopNav left={20} />

          <DropDown
            title="Filter"
            options={[
              { value: "on_the_air", label: "on_the_air" },
              { value: "popular", label: "popular" },
              { value: "top_rated", label: "top_rated" },
            ]}
            onChange={(value) => setCategory(value)}
          />
        </div>
        <div className="w-full h-auto grid grid-cols-4 gap-5 mt-5 px-5 py-3">
          {data && data.map((item, index) => <Cards data={item} key={index} />)}
        </div>
      </div>
    </div>
  );
};

export default Shows;
