import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import songFile from "./assets/music.mp3"; // ✅ นำเข้าไฟล์จาก src/assets

const songs = [
  { title: "Your Love Song", artist: "Your Favorite Artist", src: songFile },
];

function LovePlaylist() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1); // ควบคุมระดับเสียง
  const [progress, setProgress] = useState(0); // ควบคุม progress bar
  const audioRef = useRef(new Audio(songs[0].src));

  useEffect(() => {
    const audio = audioRef.current;
    audio.volume = volume;

    const updateProgress = () => {
      setProgress((audio.currentTime / audio.duration) * 100);
    };

    audio.addEventListener("timeupdate", updateProgress);

    return () => {
      audio.pause();
      audio.removeEventListener("timeupdate", updateProgress);
    };
  }, [volume]);

  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(event.target.value));
    audioRef.current.volume = Number(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-rose-400 via-pink-500 to-red-500 p-6">
      <motion.h2
        className="text-3xl font-semibold text-white mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        🎶 Love Song Playlist 🎶
      </motion.h2>

      <motion.div
        className="bg-white p-6 rounded-lg shadow-xl text-center w-96"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xl font-semibold text-red-500">{songs[0].title}</h3>
        <p className="text-gray-500">{songs[0].artist}</p>

        {/* Progress Bar */}
        <div className="w-full bg-gray-300 rounded-full h-2 mt-4">
          <div
            className="bg-pink-500 h-2 rounded-full transition-all"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* ปุ่มควบคุมเพลง */}
        <div className="mt-4 flex justify-center space-x-4">
          <button
            onClick={handlePlayPause}
            className="bg-pink-500 text-white p-3 rounded-lg hover:bg-pink-600 transition"
          >
            {isPlaying ? "⏸ Pause" : "▶ Play"}
          </button>
        </div>

        {/* Volume Control */}
        <div className="mt-4 flex flex-col items-center">
          <label className="text-sm text-gray-600">🔊 Volume</label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
            className="w-full mt-1"
          />
        </div>
      </motion.div>
    </div>
  );
}

export default LovePlaylist;
