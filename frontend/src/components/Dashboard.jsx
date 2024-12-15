import React, { useEffect, useState } from "react";
import axios from "axios";
import PlaylistDetailPage from "./PlaylistDetailPage";
import { assets } from "../assets/frontend-assets/assets";

const Dashboard = () => {
  const [playlists, setPlaylists] = useState([]);
  const [accessToken, setAccessToken] = useState("");
  const [tracks, setTracks] = useState([]);
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const [formattedDuration, setFormattedDuration] = useState("");
  const saves = 1530938;

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    let token = urlParams.get("access_token");

    if (!token) {
      token = localStorage.getItem("access_token");
    }

    setAccessToken(token);

    if (token) {
      fetchPlaylists(token);
    }
  }, []);

  const fetchPlaylists = async (token) => {
    try {
      const response = await axios.get("http://localhost:3000/api/playlists", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setPlaylists(response.data.items);
    } catch (error) {
      console.error("Error fetching playlists:", error);
    }
  };

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

  const handlePlaylistClick = (playlist) => {
    setSelectedPlaylist(playlist);
    fetchTracks(playlist.id);
  };

  const formatDuration = (durationMs) => {
    const totalMinutes = Math.floor(durationMs / 60000);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    setFormattedDuration(`${hours} hr ${minutes} min`);
  };

  return (
    <div>
      <h1>Your Playlists</h1>
      <ul>
        {playlists.map((playlist) => (
          <li key={playlist.id} onClick={() => handlePlaylistClick(playlist)}>
            <div>{playlist.name}</div>
          </li>
        ))}
      </ul>

      {selectedPlaylist && (
        <div>
          <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
            <img
              className="w-48 rounded"
              src={selectedPlaylist.images[0]?.url}
              alt={selectedPlaylist.name}
            />
            <div className="flex flex-col">
              <p>Playlist</p>
              <h2 className="text-5xl font-bold mb-4 md:text-7xl">
                {selectedPlaylist.name}
              </h2>
              <h4 className="font-light text-sm">
                {selectedPlaylist.description || "No description available"}
              </h4>
              <p className="mt-1">
                <img
                  className="inline-block w-6 mr-2"
                  src={assets.spotify_logo}
                  alt="Spotify logo"
                />
                <b>Spotify</b>
                <p className="font-light text-sm inline-block">
                  • {saves.toLocaleString()} saves • about {formattedDuration} •{" "}
                  {tracks.length} new entries
                </p>
              </p>
            </div>
          </div>

          <h2>Tracks in {selectedPlaylist.name}</h2>
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
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
