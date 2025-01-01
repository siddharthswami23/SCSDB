import React, { useEffect, useState } from "react";
import SideNav from "./partials/SideNav";
import TopNav from "./partials/TopNav";
import axios from "../utils/Axios";
import Header from "./partials/Header";
import HorizontalCards from "./partials/HorizontalCards";

const Home = () => {
  document.title = "SCSDB | HomePage";
  const [WallPaper, setWallPaper] = useState(null);
  const [data, setdata] = useState(null);

  const GetWallPaper = async () => {
    try {
      const response = await axios.get("/trending/all/day");
      setdata(response.data.results);
      let randomimg =
        response.data.results[
          Math.floor(Math.random() * response.data.results.length)
        ];
      setWallPaper(randomimg);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!WallPaper) {
      GetWallPaper();
    }
  }, [WallPaper]);

  return WallPaper ? (
    <div className="w-full h-full flex">
      <SideNav />
      <div className="w-[80%] h-full p-3">
        <TopNav />
        <Header WallPaper={WallPaper} />
        <HorizontalCards data={data} />
      </div>
    </div>
  ) : (
    <div className="w-full h-full flex items-center justify-center">
      <h1 className="text-3xl text-white">Loading...</h1>
    </div>
  );
};

export default Home;
