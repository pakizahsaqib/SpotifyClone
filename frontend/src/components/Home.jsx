// import React from "react";
// import { albumsData } from "../assets/frontend-assets/assets";
// import { songsData } from "../assets/frontend-assets/assets";
// import { artistsData } from "../assets/frontend-assets/assets";
// import AlbumItem from "./AlbumItem";
// import SongItem from "./SongItem";
// import ArtistItem from "./ArtistItem";

// const Home = () => {
//   console.log(albumsData);
//   return (
//     <>
//       <div className="flex items-center gap-2 mt-4">
//         <p className=" bg-white text-black px-4 py-1 rounded-2xl cursor-pointer">
//           All
//         </p>
//         <p className=" bg-neutral-700 hover:bg-white hover:text-black px-4 py-1 rounded-2xl cursor-pointer">
//           Music
//         </p>
//         <p className=" bg-neutral-700 hover:bg-white hover:text-black px-4 py-1 rounded-2xl cursor-pointer">
//           Podcast
//         </p>
//       </div>
//       <div className="mb-4">
//         <h1 className="my-5 font-bold text-2xl">Popular Artists</h1>
//         <div className="flex overflow-auto">
//           {artistsData.map((item, index) => {
//             return (
//               <ArtistItem
//                 key={index}
//                 name={item.name}
//                 desc={item.desc}
//                 id={item.id}
//                 image={item.image}
//               />
//             );
//           })}
//         </div>
//       </div>
//       <div className="mb-4">
//         <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
//         <div className="flex overflow-auto">
//           {albumsData.map((item, index) => {
//             return (
//               <AlbumItem
//                 key={index}
//                 name={item.name}
//                 desc={item.desc}
//                 id={item.id}
//                 image={item.image}
//               />
//             );
//           })}
//         </div>
//       </div>
//       <div className="mb-4">
//         <h1 className="my-5 font-bold text-2xl">Today's biggest hits</h1>
//         <div className="flex overflow-auto">
//           {songsData.map((item, index) => {
//             return (
//               <SongItem
//                 key={index}
//                 name={item.name}
//                 desc={item.desc}
//                 id={item.id}
//                 image={item.image}
//               />
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;
import React, { useState, useEffect } from "react";

const Home = () => {
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlaylists = async () => {
      const accessToken = "YOUR_SPOTIFY_ACCESS_TOKEN"; // Replace with your access token
      const userId = "31txkybmohzmlxajutfzwx3frs4y"; // User ID
      const url = `https://api.spotify.com/v1/users/${userId}/playlists?offset=0&limit=50&locale=en-US,en;q=0.9`;

      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const data = await response.json();
      setPlaylists(data.items); // Save the playlist items to state
      setLoading(false);
    };

    fetchPlaylists();
  }, []);

  return (
    <div>
      <h1>Playlists</h1>
      {loading ? (
        <p>Loading playlists...</p>
      ) : (
        <div>
          {playlists.map((playlist) => (
            <div key={playlist.id}>
              <h2>{playlist.name}</h2>
              <p>{playlist.description || "No description available"}</p>
              <img
                src={playlist.images[0]?.url}
                alt={playlist.name}
                style={{ width: "200px" }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
