import React from "react";
import SideNav from "./partials/SideNav";
import TopNav from "./partials/TopNav";

const Home = () => {
  document.title = "SCSDB | HomePage";
  return (
    <div className="w-full h-full flex">
      <SideNav />
      <div className="w-[80%] h-full">
        <TopNav />
      </div>
    </div>
  );
};

export default Home;
