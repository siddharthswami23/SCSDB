import React, { useEffect, useState } from "react";
import SideNav from "./partials/SideNav";
import TopNav from "./partials/TopNav";
import axios from "../utils/Axios";
import Header from "./partials/Header";

const Home = () => {
  document.title = "SCSDB | HomePage";
  const [WallPaper, setWallPaper] = useState(null);

  const GetWallPaper = async () => {
    try {
      const response = await axios.get("/trending/all/day");
      let randomimg =
        response.data.results[
          Math.floor(Math.random() * response.data.results.length)
        ];
      setWallPaper(randomimg);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(WallPaper);
  useEffect(() => {
    !WallPaper && GetWallPaper();
  }, []);

  return (
    <div className="w-full h-full flex">
      <SideNav />
      <div className="w-[80%] h-full">
        <TopNav />
        <Header data={WallPaper} />
      </div>
    </div>
  );
};

export default Home;
