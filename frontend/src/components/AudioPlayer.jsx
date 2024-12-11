//import { useEffect, useRef } from "react";
//import { usePlayerStore } from "@/stores/usePlayerStore";
import { assets, songsData } from "../assets/frontend-assets/assets";

const AudioPlayer = () => {
  return (
    <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">
      <div className=" hidden lg:flex items-center gap-4 ">
        <img
          className="w-12"
          src={songsData[0].image}
          alt={`${songsData[0].name} Image`}
        />
        <div>
          <p>{songsData[0].name}</p>
          <p>{songsData[0].desc.slice(0, 12)}</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4">
          <img
            className="w-4 cursor-pointer"
            src={assets.shuffle_icon}
            alt=""
          />
          <img className="w-4 cursor-pointer" src={assets.prev_icon} alt="" />
          <img className="w-4 cursor-pointer" src={assets.play_icon} alt="" />
          <img className="w-4 cursor-pointer" src={assets.next_icon} alt="" />
          <img className="w-4 cursor-pointer" src={assets.loop_icon} alt="" />
        </div>
        <div className="flex items-center gap-5">
          <p>1:18</p>
          <div className="w-[60vw] max-w-[500px] bg-neutral-600 rounded-full cursor-pointer">
            <hr className="h-1 border-none w-10 bg-white hover:bg-green-800 rounded-full" />
          </div>
          <p>3:20</p>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-2 opacity-75">
        <img className="w-4" src={assets.plays_icon} alt="Play Icon" />
        <img className="w-4" src={assets.mic_icon} alt="Mic Icon" />
        <img className="w-4" src={assets.queue_icon} alt="Queue Icon" />
        <img className="w-4" src={assets.speaker_icon} alt="Speaker Icon" />
        <img className="w-4" src={assets.volume_icon} alt="Volume Icon" />
        <div className="w-20 bg-slate-50 h-1 rounded"></div>
        <img
          className="w-4"
          src={assets.mini_player_icon}
          alt="Open mini-player icon"
        />
        <img className="w-4" src={assets.zoom_icon} alt="Zoom Icon" />
      </div>
    </div>
  );
};

export default AudioPlayer;

/*   const audioRef = useRef(null);
  const prevSongRef = useRef(null);

  const { currentSong, isPlaying, playNext } = usePlayerStore();

  // Handle play/pause logic when isPlaying changes
  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying]);

  // Handle song ends to play the next song
  useEffect(() => {
    const audio = audioRef.current;

    const handleEnded = () => {
      playNext();
    };

    audio?.addEventListener("ended", handleEnded);

    // Cleanup event listener on unmount
    return () => {
      audio?.removeEventListener("ended", handleEnded);
    };
  }, [playNext]);

  // Handle changes to the current song and update the audio source
  useEffect(() => {
    if (!audioRef.current || !currentSong) return;

    const audio = audioRef.current;

    // Check if the current song has changed
    if (prevSongRef.current !== currentSong?.audioUrl) {
      audio.src = currentSong.audioUrl;
      audio.currentTime = 0; // Reset playback to start
      prevSongRef.current = currentSong.audioUrl;

      // Play the new song if it should be playing
      if (isPlaying) {
        audio.play();
      }
    }
  }, [currentSong, isPlaying]);

  return <audio ref={audioRef} />;*/
