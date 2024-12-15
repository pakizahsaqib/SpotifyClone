import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import AlbumDetailPage from "./AlbumDetailPage";
import Dashboard from "./Dashboard";
import Callback from "./Callback";

const MainLayout = () => {
  return (
    <div className="w-[100%] px-6 pt-4 rounded-lg bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/album/:id" element={<AlbumDetailPage />}></Route>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/auth/callback" element={<Callback />} />
      </Routes>
    </div>
  );
};

export default MainLayout;
