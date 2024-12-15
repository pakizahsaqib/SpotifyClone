import React from "react";

const PlaylistItem = () => {
  return (
    <>
      <li key={playlist.id} onClick={() => handlePlaylistClick(playlist.id)}>
        <div>{playlist.name}</div>
      </li>
    </>
  );
};

export default PlaylistItem;
