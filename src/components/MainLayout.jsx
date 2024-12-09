import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";

const MainLayout = () => {
  return (
    <div className="w-[100%] h-[85%] px-6 pt-4 rounded-lg bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0">
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
};

export default MainLayout;
