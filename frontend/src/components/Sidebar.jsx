// import React, { useEffect, useState } from "react";
// import { assets } from "../assets/frontend-assets/assets";
// import axios from "axios";

// const Sidebar = ({ playlists }) => {
//   console.log(playlists);
//   return (
//     <div className="w-[25%] h-full px-2 flex-col gap-2 text-white lg:flex">
//       <div className="bg-[#121212] h-[85%] rounded-lg">
//         <div className="p-4 flex items-center justify-between">
//           <div className="flex items-center gap-3">
//             <img className="w-8" src={assets.stack_icon} alt="Stack-Icon" />
//             <p className="font-semibold">Your Library</p>
//           </div>
//           <div className="flex items-center gap-3">
//             <img className="w-5" src={assets.arrow_icon} alt="Arrow Icon" />
//             <img className="w-5" src={assets.plus_icon} alt="Plus Icon" />
//           </div>
//         </div>

//         <div className="p-4 bg-[#242424] m-2 rounded-lg font-semibold flex flex-col items-start justify-start gap-1 pl-4">
//           <h1>Create Your First Playlist</h1>
//           <p className="font-light text-sm">It's easy, we will help you</p>
//           <button className="px-4 py-1.5 bg-white text-sm text-black rounded-full mt-4">
//             Create Playlist
//           </button>
//         </div>

//         <div className="p-4 bg-[#242424] m-2 rounded-lg font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-6">
//           <h1>Let's find some podcasts to follow</h1>
//           <p className="font-light text-sm">
//             We will keep you updated on new episodes
//           </p>
//           <button className="px-4 py-1.5 bg-white text-sm text-black rounded-full mt-4">
//             Browse Podcasts
//           </button>
//         </div>

//         {/* Playlists Section */}
//         <div className="mt-6 px-4">
//           <h2 className="text-lg font-semibold mb-4">Your Playlists</h2>
//           <ul className="space-y-2">
//             {playlists.length > 0 ? (
//               playlists.map((playlist) => (
//                 <li
//                   key={playlist.id}
//                   className="text-sm font-medium cursor-pointer hover:text-gray-400"
//                 >
//                   {playlist.name}
//                 </li>
//               ))
//             ) : (
//               <p className="text-sm font-light">No playlists found.</p>
//             )}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

// import React from "react";
// import { assets } from "../assets/frontend-assets/assets";

// const Sidebar = ({ playlists, activeSection, onSectionClick }) => {
//   return (
//     <div className="w-[250px] h-full px-2 flex-col gap-4 text-white bg-[#121212] flex">
//       <div className="flex flex-col w-full h-full">
//         {/* Header Section */}
//         <div className="p-4 flex items-center justify-between">
//           <div className="flex items-center gap-3">
//             <img className="w-8" src={assets.stack_icon} alt="Stack-Icon" />
//             <p className="font-semibold">Your Library</p>
//           </div>
//         </div>

//         {/* Navigation Sections */}
//         <div className="mt-4 space-y-4">
//           {/* Home Section */}
//           <div
//             className={`flex items-center gap-3 px-4 py-2 cursor-pointer ${
//               activeSection === "home" ? "bg-[#282828]" : "hover:bg-[#282828]"
//             }`}
//             onClick={() => onSectionClick("home")}
//           >
//             <img className="w-6" src={assets.home_icon} alt="Home" />
//             <p className="font-medium">Home</p>
//           </div>

//           {/* Search Section */}
//           <div
//             className={`flex items-center gap-3 px-4 py-2 cursor-pointer ${
//               activeSection === "search" ? "bg-[#282828]" : "hover:bg-[#282828]"
//             }`}
//             onClick={() => onSectionClick("search")}
//           >
//             <img className="w-6" src={assets.search_icon} alt="Search" />
//             <p className="font-medium">Search</p>
//           </div>

//           {/* Your Library Section */}
//           <div
//             className={`flex items-center gap-3 px-4 py-2 cursor-pointer ${
//               activeSection === "library" ? "bg-[#282828]" : "hover:bg-[#282828]"
//             }`}
//             onClick={() => onSectionClick("library")}
//           >
//             <img className="w-6" src={assets.library_icon} alt="Library" />
//             <p className="font-medium">Your Library</p>
//           </div>
//         </div>

//         {/* Playlists Section */}
//         <div className="mt-6 px-4">
//           <h2 className="text-lg font-semibold mb-4">Your Playlists</h2>
//           <ul className="space-y-2">
//             {playlists.length > 0 ? (
//               playlists.map((playlist) => (
//                 <li
//                   key={playlist.id}
//                   className="text-sm font-medium cursor-pointer hover:text-gray-400"
//                 >
//                   {playlist.name}
//                 </li>
//               ))
//             ) : (
//               <p className="text-sm font-light">No playlists found.</p>
//             )}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
import { assets } from "../assets/frontend-assets/assets";
const Sidebar = ({ playlists, onPlaylistClick }) => {
  console.log("Sidebar received playlists:", playlists);
  return (
    <div className="w-[25%] h-full px-2 flex-col gap-2 text-white lg:flex">
      <div className="bg-[#121212] h-[85%] rounded-lg">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-8" src={assets.stack_icon} alt="Stack-Icon" />
            <p className="font-semibold">Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-5" src={assets.arrow_icon} alt="Arrow Icon" />
            <img className="w-5" src={assets.plus_icon} alt="Plus Icon" />
          </div>
        </div>

        <div className="mt-6 px-4">
          <h2 className="text-lg font-semibold mb-4">Your Playlists</h2>
          <ul className="space-y-2">
            {playlists.length > 0 ? (
              playlists.map((playlist) => (
                <li
                  key={playlist.id}
                  className="text-sm font-medium cursor-pointer hover:text-gray-400 flex items-center "
                  onClick={() => onPlaylistClick(playlist)}
                >
                  <img
                    className="inline w-10 mr-5"
                    src={playlist.images[0]?.url}
                  />
                  <div>
                    <p className="text-base font-light hover:text-green-500">
                      {" "}
                      {playlist.name}
                    </p>

                    <p className="font-light text-neutral-400">
                      Playlist <b className="text-md">•</b>{" "}
                      {playlist.owner.display_name}
                    </p>
                  </div>
                </li>
              ))
            ) : (
              <>
                <div className="p-4 bg-[#242424] m-2 rounded-lg font-semibold flex flex-col items-start justify-start gap-1 pl-4">
                  <h1>Create Your First Playlist</h1>
                  <p className="font-light text-sm">
                    It's easy, we will help you
                  </p>
                  <button className="px-4 py-1.5 bg-white text-sm text-black rounded-full mt-4">
                    Create Playlist
                  </button>
                </div>

                <div className="p-4 bg-[#242424] m-2 rounded-lg font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-6">
                  <h1>Let's find some podcasts to follow</h1>
                  <p className="font-light text-sm">
                    We will keep you updated on new episodes
                  </p>
                  <button className="px-4 py-1.5 bg-white text-sm text-black rounded-full mt-4">
                    Browse Podcasts
                  </button>
                </div>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
