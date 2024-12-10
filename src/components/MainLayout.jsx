import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import AlbumDetailPage from "./AlbumDetailPage";

const MainLayout = () => {
  return (
    <div className="w-[100%] px-6 pt-4 rounded-lg bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/album/:id" element={<AlbumDetailPage />}></Route>
      </Routes>
    </div>
  );
};

export default MainLayout;
