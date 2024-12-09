import React from "react";
import { assets } from "../assets/frontend-assets/assets";

const Sidebar = () => {
  return (
    <div className="w-[25%] h-full px-2 flex-col gap-2 text-white lg:flex">
      <div className="bg-[#121212] h-[85%] rounded-lg">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-8" src={assets.stack_icon} alt="Stack-Icon" />
            <p className="font-semibold">Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-5" src={assets.arrow_icon} alt="Arrow Icon" />
            <img className="w-5" src={assets.plus_icon} alt="" />
          </div>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded-lg font-semibold flex flex-col items-start justify-start gap-1 pl-4">
          <h1>Create Your First Playlist</h1>
          <p className="font-light text-sm">It's easy we will help you</p>
          <button className="px-4 py-1.5 bg-white text-sm text-black rounded-full mt-4">
            Create Playlist
          </button>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded-lg font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-6">
          <h1>Let's find some podcasts to follow</h1>
          <p className="font-light text-sm">
            We will keep you updated on new episode
          </p>
          <button className="px-4 py-1.5 bg-white text-sm text-black rounded-full mt-4">
            Browse Podcasts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
