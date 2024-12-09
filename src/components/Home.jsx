import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <div className="flex items-center gap-2 mt-4">
        <p className=" bg-white text-black px-4 py-1 rounded-2xl cursor-pointer">
          All
        </p>
        <p className=" bg-neutral-700 hover:bg-white hover:text-black px-4 py-1 rounded-2xl cursor-pointer">
          Music
        </p>
        <p className=" bg-black px-4 py-1 rounded-2xl cursor-pointer">
          Podcast
        </p>
      </div>
    </>
  );
};

export default Home;
