import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Trending from "./Components/Trending";
import Popular from "./Components/Popular";
import Movie from "./Components/Movie";
import Shows from "./Components/Shows";
import People from "./Components/People";

const App = () => {
  return (
    <div className="w-full min-h-screen bg-[#1F1E24] text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movies" element={<Movie />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/people" element={<People />} />
      </Routes>
    </div>
  );
};

export default App;
