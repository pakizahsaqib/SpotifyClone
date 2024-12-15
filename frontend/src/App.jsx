import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import AudioPlayer from "./components/AudioPlayer";
import MainLayout from "./components/MainLayout";
import Navbar from "./components/Navbar";
import axios from "axios";
import Cookies from "js-cookie";

const App = () => {
  const [playlists, setPlaylists] = useState([]);
  const [accessToken, setAccessToken] = useState("");
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    let token = urlParams.get("access_token");

    if (!token) {
      token = localStorage.getItem("access_token");
    }

    setAccessToken(token);

    if (token) {
      fetchPlaylists(token);
    } else {
      console.error("No access token found!");
    }
  }, []);

  const fetchPlaylists = async (token) => {
    try {
      const response = await axios.get("http://localhost:3000/api/playlists", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Fetched playlists:", response.data.items);
      setPlaylists(response.data.items || []);
    } catch (error) {
      console.error("Error fetching playlists:", error);
    }
  };

  const handlePlaylistClick = (playlist) => {
    console.log("Selected Playlist:", playlist);
    setSelectedPlaylist(playlist);
    console.log("Updated selectedPlaylist state:", playlist);
  };

  return (
    <div className="h-screen bg-black">
      <Navbar />
      <div className="h-[80%] m-0 flex">
        <Sidebar playlists={playlists} onPlaylistClick={handlePlaylistClick} />
        <MainLayout
          accessToken={accessToken}
          selectedPlaylist={selectedPlaylist}
        />
      </div>
      <AudioPlayer />
    </div>
  );
};

export default App;
