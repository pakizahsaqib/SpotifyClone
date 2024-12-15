import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import AlbumDetailPage from "./AlbumDetailPage";
import Dashboard from "./Dashboard";
import Callback from "./Callback";
import PlaylistItem from "./PlaylistItem";

const MainLayout = ({ accessToken, selectedPlaylist }) => {
  console.log("MainLayout selectedPlaylist:", selectedPlaylist);

  return (
    <div className="w-[100%] px-6 pt-4 rounded-lg bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0">
      <Routes>
        <Route
          path="/home"
          element={<Home selectedPlaylist={selectedPlaylist} />}
        />
        <Route path="/album/:id" element={<AlbumDetailPage />} />
        <Route
          path="/"
          element={
            <PlaylistItem
              accessToken={accessToken}
              selectedPlaylist={selectedPlaylist}
            />
          }
        />
        <Route path="/auth/callback" element={<Callback />} />
      </Routes>
    </div>
  );
};

export default MainLayout;
