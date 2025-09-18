import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./App.css";
import Ballpit from "./blocks/Backgrounds/Ballpit/Ballpit";
import Iridescence from "./blocks/Backgrounds/Iridescence/Iridescence";
import bbyImage from "./assets/bby2.jpg";
import "animate.css";
import GradientText from "./blocks/TextAnimations/GradientText/GradientText";
import { FaPlay, FaPause, FaVolumeUp, FaVolumeDown, FaStepBackward, FaStepForward } from "react-icons/fa";
import musicFile from "./assets/music.mp3";
import BlurText from "./blocks/TextAnimations/BlurText/BlurText";
import PixelTransition from './blocks/Animations/PixelTransition/PixelTransition';


const IridescenceBackground = React.memo(() => (
  <motion.div className="absolute top-0 left-0 w-full h-full z-0">
    <Iridescence color={[1, 0.8, 0.8]} mouseReact={false} amplitude={0.1} speed={1.0} />
  </motion.div>
));

function CountdownTimer() {
  const targetDate = new Date("2025-02-14T00:00:00");
  const [timeLeft, setTimeLeft] = useState(Math.max(0, targetDate.getTime() - new Date().getTime()));
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef(new Audio(musicFile));

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = Math.max(0, targetDate.getTime() - new Date().getTime());
      setTimeLeft(diff);
      if (diff <= 0) {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  useEffect(() => {
    const updateProgress = () => {
      setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
    };
    audioRef.current.addEventListener("timeupdate", updateProgress);
    return () => audioRef.current.removeEventListener("timeupdate", updateProgress);
  }, []);

  const days = Math.max(0, Math.floor(timeLeft / (1000 * 60 * 60 * 24)));
  const hours = Math.max(0, Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const minutes = Math.max(0, Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)));
  const seconds = Math.max(0, Math.floor((timeLeft % (1000 * 60)) / 1000));

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (value: number) => {
    audioRef.current.volume = value;
    setVolume(value);
  };

  function handleAnimationComplete(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <motion.div className="flex flex-col justify-center items-center min-h-screen bg-gray-900 text-white relative">
      <IridescenceBackground />

      <motion.div className="absolute top-0 text-center z-10 w-full mt-6">
        <GradientText colors={["#ff0000", "#ff9900", "#ffff00", "#33cc33", "#0099ff"]} animationSpeed={6}>
          Countdown to Love ❤️
        </GradientText>
        <div className="flex justify-center space-x-4 mt-2">
          {[days, hours, minutes, seconds].map((time, index) => (
            <motion.div
              key={index}
              className="text-black bg-white rounded-lg shadow-lg p-10 text-2xl font-bold border border-gray-300"
            >
              {time < 10 ? `0${time}` : time}
            </motion.div>
          ))}
        </div>
      </motion.div>
      <div className="absolute top-55 text-center">
        <BlurText
          text="I only see daylight"
          delay={150}
          animateBy="letters"
          direction="bottom"
          onAnimationComplete={handleAnimationComplete}
          className="text-7xl text-white font-bold"
        />
      </div>
      <PixelTransition
  firstContent={
    <img
      src={bbyImage}
      alt="Ilysm!"
      style={{ width: "100%", height: "100%", objectFit: "cover", position: "relative" }}
    />
  }
  secondContent={
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "grid",
        placeItems: "center",
        backgroundColor: "#eab9d6"
      }}
    >
      <p style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff" }}>Ilysm!</p>
    </div>
  }
  gridSize={12}
  pixelColor='#ffffff'
  animationStepDuration={0.4}
  className="custom-pixel-card"
/>

      {/* 🎵 Apple Music Style Music Player */}
      <motion.div
        className="absolute -bottom-16 flex flex-col items-center justify-center space-y-4 w-80 
             bg-gray-800/30 backdrop-blur-md p-5 rounded-2xl shadow-xl z-20">
        <h3 className="text-white text-lg font-semibold">Daylight</h3>
        <p className="text-gray-400">My bby</p>

        {/* Progress Bar */}
        <div className="w-full bg-gray-600 h-1 rounded-md overflow-hidden">
          <motion.div className="bg-white h-1" style={{ width: `${progress}%` }} />
        </div>

        {/* Controls */}
        <div className="flex justify-center items-center space-x-6">
          {/* ⏮️ Previous Button */}
          <button
            className="p-3 bg-gray-700 text-white rounded-full shadow-md hover:bg-gray-600 transition"
          >
            <FaStepBackward size={25} />
          </button>

          {/* ▶ Play/Pause Button */}
          <button
            onClick={handlePlayPause}
            className="p-4 bg-white text-black rounded-full shadow-md hover:bg-gray-300 transition"
          >
            {isPlaying ? <FaPause size={30} /> : <FaPlay size={30} />}
          </button>

          {/* ⏭️ Next Button */}
          <button
            className="p-3 bg-gray-700 text-white rounded-full shadow-md hover:bg-gray-600 transition"
          >
            <FaStepForward size={25} />
          </button>
        </div>

        {/* Volume Control */}
        <div className="flex items-center space-x-3 w-full">
          <FaVolumeDown className="text-gray-300" />
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => handleVolumeChange(Number(e.target.value))}
            className="w-full h-1 bg-gray-400 rounded-lg appearance-none cursor-pointer"
          />
          <FaVolumeUp className="text-gray-300" />
        </div>
      </motion.div>

      {/* Ballpit Effect (ให้เลื่อนลงล่างสุดจริงๆ) */}
      <motion.div className="absolute bottom-[-20%] w-full  pointer-events-none">
        <Ballpit count={300} gravity={0.7} friction={0.8} wallBounce={0.95} followCursor colors={["#FF4C4C", "#FF66B2", "#FFF", "#FFD700"]} />
      </motion.div>
    </motion.div>
  );
}

export default CountdownTimer;
