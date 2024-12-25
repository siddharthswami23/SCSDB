import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";

const App = () => {
  return (
    <div className="w-full min-h-screen bg-[#1F1E24] text-white">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
