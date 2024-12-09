import React from "react";
import { assets } from "../assets/frontend-assets/assets";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center font-semibold bg-black px-6 py-3">
      <img className="w-8" src={assets.spotify_w} />
      <div className="flex items-center gap-2 absolute left-1/2  transform -translate-x-1/2">
        <div className="bg-neutral-800 p-3 rounded-full hover:scale-105 cursor-pointer">
          <img className="w-6" src={assets.home_icon} />
        </div>
        <div className="w-[100%] flex items-center justify-between bg-neutral-800 px-6 py-0.5 rounded-full gap-24">
          <div className="flex items-center gap-2">
            <img className="w-5" src={assets.search_icon} />
            <input
              type="text"
              placeholder="What do you want to play?"
              className="w-60 p-2 text-base font-light bg-transparent"
            />
          </div>
          <div className="flex gap-3 items-center">
            <div className="bg-white h-4 w-[1px]"></div>
            <img className="w-5 cursor-pointer" src={assets.browse} />
          </div>
        </div>
      </div>
      {/* <div className="flex items-center gap-2">
        <img
          className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
          src={assets.arrow_left}
        />
        <img
          className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
          src={assets.arrow_right}
        />
      </div> */}
      <div className="flex items-center gap-4">
        <button className="rounded-full bg-white text-black text-sm cursor-pointer px-4 py-1.5 hidden md:block">
          Explore Premium
        </button>
        <div className="flex items-center gap-1 text-white text-sm cursor-pointer px-4 py-1">
          <img className="w-4" src={assets.download} />
          <p>Install App</p>
        </div>
        <img className="w-8 p-2 cursor-pointer" src={assets.bell_icon} />
        <div className="bg-neutral-800 p-2 rounded-full hover:scale-105 cursor-pointer">
          <p className="bg-orange-500 text-sm text-black w-7 h-7 rounded-full flex items-center justify-center ">
            P
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
