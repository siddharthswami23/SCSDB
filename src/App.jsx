import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Trending from "./Components/Trending";

const App = () => {
  return (
    <div className="w-full min-h-screen bg-[#1F1E24] text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
      </Routes>
    </div>
  );
};

export default App;
