import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Trending from "./Components/Trending";
import Popular from "./Components/Popular";
import Movie from "./Components/Movie";
import Shows from "./Components/Shows";
import People from "./Components/People";
import MovieDetails from "./Components/MovieDetails";
import ShowDetails from "./Components/ShowDetails";
import PersonDetails from "./Components/PersonDetails";

const App = () => {
  return (
    <div className="w-full min-h-screen bg-[#1F1E24] text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movies" element={<Movie />} />
        <Route path="/movie/details/:id" element={<MovieDetails />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/tv/details/:id" element={<ShowDetails />} />
        <Route path="/shows/details/:id" element={<ShowDetails />} />
        <Route path="/people" element={<People />} />
        <Route path="/people/details/:id" element={<PersonDetails />} />
      </Routes>
    </div>
  );
};

export default App;
