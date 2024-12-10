import React from "react";
import { useParams } from "react-router-dom";
import {
  albumsData,
  assets,
  songsData,
} from "../assets/frontend-assets/assets";

const AlbumDetailPage = () => {
  const { id } = useParams();
  const albumData = albumsData[id];
  // const albumData = albumsData.find((item) => item.id === Number(id));
  console.log("Album Data", albumData);

  return (
    <>
      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
        <img className="w-48 rounded" src={albumData.image} />
        <div className="flex flex-col">
          <p className="">Playlist</p>
          <h2 className=" text-5xl font-bold mb-4 md:text-7xl">
            {albumData.name}
          </h2>
          <h4 className="font-light text-sm">{albumData.desc}</h4>
          <p className="mt-1">
            <img className="inline-block w-6 mr-2" src={assets.spotify_logo} />
            <b>Spotify </b>
            <p className="font-light text-sm inline-block">
              {" "}
              • 1,530,938 saves • about 2 hr 30 min • 13 new entries
            </p>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
        <p>
          <b className="mr-4">#</b>Title
        </p>
        <p className="hidden sm:block">Plays</p>
        <p className="hidden sm:block">Album</p>
        <img className="m-auto w-4" src={assets.clock_icon} />
      </div>
      <hr />
      {songsData.map((item, index) => {
        return (
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff26]">
            <p className="text-white">
              <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
              <img className="inline w-10 mr-5" src={item.image} />
              {item.name}
            </p>

            <p className="text-sm hidden sm:block">{item.plays}</p>
            <p className="text-sm hidden sm:block">{albumData.name}</p>
            <p className="text-sm text-center">{item.duration}</p>
          </div>
        );
      })}
    </>
  );
};

export default AlbumDetailPage;
