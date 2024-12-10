import React from "react";
import Sidebar from "./components/Sidebar";
import AudioPlayer from "./components/AudioPlayer";
import MainLayout from "./components/MainLayout";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="h-screen bg-black">
      <Navbar />
      <div className="h-[80%] m-0 flex">
        <Sidebar />
        <MainLayout />
      </div>

      <AudioPlayer />
    </div>
  );
};

export default App;
