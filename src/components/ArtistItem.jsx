import React from "react";

const ArtistItem = ({ name, image, id }) => {
  return (
    <div className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
      <img className="rounded-full" src={image} alt="" />
      <p className="font-bold mt-2 mb-1 text-center">{name}</p>
    </div>
  );
};

export default ArtistItem;
