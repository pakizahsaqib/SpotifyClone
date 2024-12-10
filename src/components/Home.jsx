import React from "react";
import { albumsData } from "../assets/frontend-assets/assets";
import { songsData } from "../assets/frontend-assets/assets";
import { artistsData } from "../assets/frontend-assets/assets";
import AlbumItem from "./AlbumItem";
import SongItem from "./SongItem";
import ArtistItem from "./ArtistItem";

const Home = () => {
  console.log(albumsData);
  return (
    <>
      <div className="flex items-center gap-2 mt-4">
        <p className=" bg-white text-black px-4 py-1 rounded-2xl cursor-pointer">
          All
        </p>
        <p className=" bg-neutral-700 hover:bg-white hover:text-black px-4 py-1 rounded-2xl cursor-pointer">
          Music
        </p>
        <p className=" bg-neutral-700 hover:bg-white hover:text-black px-4 py-1 rounded-2xl cursor-pointer">
          Podcast
        </p>
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Popular Artists</h1>
        <div className="flex overflow-auto">
          {artistsData.map((item, index) => {
            return (
              <ArtistItem
                key={index}
                name={item.name}
                desc={item.desc}
                id={item.id}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((item, index) => {
            return (
              <AlbumItem
                key={index}
                name={item.name}
                desc={item.desc}
                id={item.id}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Today's biggest hits</h1>
        <div className="flex overflow-auto">
          {songsData.map((item, index) => {
            return (
              <SongItem
                key={index}
                name={item.name}
                desc={item.desc}
                id={item.id}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
