import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Ballpit from './blocks/Backgrounds/Ballpit/Ballpit';
import Iridescence from './blocks/Backgrounds/Iridescence/Iridescence';
import PixelTransition from './blocks/Animations/PixelTransition/PixelTransition';
import bbyImage from './assets/bby2.jpg'; 
import 'animate.css';
import ShinyText from './blocks/TextAnimations/ShinyText/ShinyText';
import ElasticSlider from './blocks/Components/ElasticSlider/ElasticSlider';
import { FaPlay, FaPause, FaStepForward, FaStepBackward, FaVolumeUp, FaVolumeDown, FaStar, FaEllipsisV } from 'react-icons/fa';

// ไฟล์เสียงที่ต้องการเล่น
import musicFile from './assets/music.mp3';

const IridescenceBackground = React.memo(() => {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
      <Iridescence
        color={[1, 0.8, 0.8]} 
        mouseReact={false}
        amplitude={0.1}
        speed={1.0}
      />
    </div>
  );
});

function CountdownTimer() {
  const targetDate = new Date("2025-02-14T00:00:00");
  const [timeLeft, setTimeLeft] = useState<number>(targetDate.getTime() - new Date().getTime());
  const [isPixelVisible, setPixelVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false); 
  const [volume, setVolume] = useState(1); 
  const audioRef = useRef(new Audio(musicFile));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(targetDate.getTime() - new Date().getTime());
    }, 1000);

    setTimeout(() => {
      setPixelVisible(true);
    }, 5000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (value) => {
    audioRef.current.volume = value;
    setVolume(value);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800 text-white relative">
      <IridescenceBackground />

      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: isPixelVisible ? 5 : 0, 
        transition: 'z-index 1s ease'
      }}>
        {isPixelVisible && (
          <PixelTransition
            firstContent={<img src={bbyImage} alt="Happy valentine's day!" style={{ width: "100%", height: "100%", objectFit: "cover" }} />}
            secondContent={<div style={{ width: "100%", height: "100%", display: "grid", placeItems: "center", backgroundColor: "#111" }}>
              <p style={{ fontWeight: 90, fontSize: "3rem", color: "#ffffff" }}>Happy valentine's day!</p>
            </div>}
            gridSize={20}
            pixelColor='#ffffff'
            animationStepDuration={0.4}
            className="custom-pixel-card"
          />
        )}
      </div>

      <div className="absolute top-0 text-center z-10 w-full">
        <ShinyText text="Just some shiny text!" disabled={false} speed={10} className="custom-class" />
        <div className="flex justify-center space-x-4">
          <div className="time-box animate__animated animate__fadeIn animate__delay-1s">{days < 10 ? `0${days}` : days}</div>
          <div className="time-box animate__animated animate__fadeIn animate__delay-1s">{hours < 10 ? `0${hours}` : hours}</div>
          <div className="time-box animate__animated animate__fadeIn animate__delay-1s">{minutes < 10 ? `0${minutes}` : minutes}</div>
          <div className="time-box animate__animated animate__fadeIn animate__delay-1s">{seconds < 10 ? `0${seconds}` : seconds}</div>
        </div>
      </div>

      {/* กรอบโปร่งใสที่ใต้รูปภาพ */}
{/* กรอบโปร่งใสที่ใต้รูปภาพ */}
<div className="absolute bottom-26 left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center justify-center space-y-2 w-full sm:w-4/5 md:w-2/5 lg:w-1/5 bg-black opacity-80 rounded-lg p-4">
  {/* ชื่อเพลงและศิลปิน */}
  <div className="text-white text-xl font-semibold">
    <p className="text-center">Daylight</p>
    <p className="text-center text-sm opacity-70">My bby</p>
  </div>

  <div className="w-full flex justify-between items-center">
    <button 
      onClick={() => { /* ข้ามเพลง */ }}
      className="p-4 text-white hover:bg-gray-800 rounded-full transition duration-300">
      <FaStepBackward size={30} />
    </button>

    <button 
      onClick={handlePlayPause} 
      className="p-6 bg-transparent text-white rounded-full hover:bg-gray-800 hover:shadow-lg transition duration-300">
      {isPlaying ? <FaPause size={40} /> : <FaPlay size={40} />}
    </button>

    <button 
      onClick={() => { /* ข้ามเพลง */ }}
      className="p-4 text-white hover:bg-gray-800 rounded-full transition duration-300">
      <FaStepForward size={30} />
    </button>
  </div>

  {/* Additional Buttons for Star and Options */}
  <div className="absolute top-0 right-0 flex space-x-4 mt-2 mr-2">
    <button 
      onClick={() => { /* Add to favourites */ }}
      className="p-3 text-white hover:bg-gray-800 rounded-full transition duration-300">
      <FaStar size={14} />
    </button>
    
    <button 
      onClick={() => { /* More options */ }}
      className="p-3 text-white hover:bg-gray-800 rounded-full transition duration-300">
      <FaEllipsisV size={14} />
    </button>
  </div>

  {/* แถบควบคุมเสียง */}
  <ElasticSlider
    leftIcon={<FaVolumeDown size={20} />}
    rightIcon={<FaVolumeUp size={20} />}
    startingValue={500}
    defaultValue={750}
    maxValue={1000}
    isStepped
    stepSize={10}
    onChange={(value) => handleVolumeChange(value / 1000)}
  />
</div>


      <div style={{ position: 'absolute', bottom: 0, width: '100%', zIndex: 1 }}>
        <Ballpit
          count={300}
          gravity={0.7}
          friction={0.8}
          wallBounce={0.95}
          followCursor={true}
          colors={['#FF4C4C', '#FF66B2', '#FFF', '#FFD700']}
        />
      </div>
    </div>
  );
}

export default CountdownTimer;
