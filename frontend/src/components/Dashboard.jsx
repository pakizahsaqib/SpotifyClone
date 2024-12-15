import React, { useEffect, useState } from "react";
import axios from "axios";
import PlaylistDetailPage from "./PlaylistDetailPage";
import { assets } from "../assets/frontend-assets/assets";

const Dashboard = ({ accessToken, selectedPlaylist }) => {
  console.log("Access Token", accessToken);
  const [tracks, setTracks] = useState([]);
  // const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const [formattedDuration, setFormattedDuration] = useState("");
  const saves = 1530938;
  let id = 1;

  // useEffect(() => {
  //   const urlParams = new URLSearchParams(window.location.search);
  //   let token = urlParams.get("access_token");

  //   if (!token) {
  //     token = localStorage.getItem("access_token");
  //   }

  //   setAccessToken(token);

  //   if (token) {
  //     fetchPlaylists(token);
  //   }
  // }, []);

  // const fetchPlaylists = async (token) => {
  //   try {
  //     const response = await axios.get("http://localhost:3000/api/playlists", {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     setPlaylists(response.data.items);
  //   } catch (error) {
  //     console.error("Error fetching playlists:", error);
  //   }
  // };
  useEffect(() => {
    const fetchTracks = async (playlistId) => {
      try {
        const response = await axios.get(
          `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setTracks(response.data.items);

        // Calculate total duration and format it
        const totalDuration = response.data.items.reduce(
          (acc, track) => acc + track.track.duration_ms,
          0
        );
        formatDuration(totalDuration);
      } catch (error) {
        console.error("Error fetching tracks:", error);
      }
    };

    if (selectedPlaylist?.id) {
      console.log("ID:", selectedPlaylist.id);
      fetchTracks(selectedPlaylist.id);
      console.log("Tracks", tracks);
    }
  }, [selectedPlaylist?.id, accessToken]); // Re-run only when selectedPlaylist.id or accessToken changes

  // const handlePlaylistClick = (playlist) => {
  //   setSelectedPlaylist(playlist);
  //
  // };

  const formatDuration = (durationMs) => {
    const totalMinutes = Math.floor(durationMs / 60000);

    const minutes = totalMinutes % 60;
    const seconds = Math.floor((durationMs % 60000) / 1000);
    setFormattedDuration(`${minutes} min ${seconds} sec`);
  };

  return (
    <>
      <div>
        {/* <h1>Your Playlists</h1>
        <ul>
          {playlists.map((playlist) => (
            <li key={playlist.id} onClick={() => handlePlaylistClick(playlist)}>
              <div>{playlist.name}</div>
            </li>
          ))}
        </ul> */}

        {selectedPlaylist && (
          <div>
            <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-center">
              <img
                className="w-48 rounded"
                src={selectedPlaylist.images[0]?.url}
                alt={selectedPlaylist.name}
              />
              <div className="flex flex-col">
                <p>Playlist</p>
                <h2 className="text-5xl font-bold mb-4 md:text-8xl">
                  {selectedPlaylist.name}
                </h2>

                <p className="mt-1">
                  {selectedPlaylist.owner.display_name}
                  <p className="font-light text-neutral-400 text-sm inline-block">
                    {" "}
                    <b className="text-neutral-300 mx-1 font-semibold">•</b>
                    {tracks.length} songs, {formattedDuration}
                  </p>
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
              <p>
                <b className="mr-4">#</b>Title
              </p>

              <p className="hidden sm:block">Album</p>
              <p className="hidden sm:block">Date Added</p>
              <img
                className="m-auto w-4"
                src={assets.clock_icon}
                alt="Clock icon"
              />
            </div>
            <div className="mx-4 bg-neutral-300 h-[0.5px] mb-2"></div>

            <div>
              {tracks.map((track, index) => (
                <PlaylistDetailPage
                  key={track.track.id}
                  name={track.track.name}
                  album={track.track.album.name}
                  dateAdded={track.added_at}
                  duration={track.track.duration_ms} // Pass duration in ms
                  image={track.track.album.images[0]?.url}
                  artists={track.track.artists
                    .map((artist) => artist.name)
                    .join(", ")}
                  id={id++}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;
