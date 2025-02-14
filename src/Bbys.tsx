import React from "react";
import CircularGallery from "./blocks/Components/CircularGallery/CircularGallery";
import BlurText from "./blocks/TextAnimations/BlurText/BlurText";
import bbyImage from "./assets/bby.jpg"; // นำเข้าไฟล์ภาพจาก src/assets
import bby2Image from "./assets/bby2.jpg"; // นำเข้าไฟล์ภาพจาก src/assets
import bby3Image from "./assets/bby3.jpg"; // นำเข้าไฟล์ภาพจาก src/assets
import bby4Image from "./assets/bby4.jpg"; // นำเข้าไฟล์ภาพจาก src/assets

const items = [
  { image: bbyImage, text: "Happy Valentine’s! 💖" },
  { image: bby2Image, text: "💖 Stay loved & happy" },
  { image: bby3Image, text: "Sending love your way! 💌" },
  { image: bby4Image, text: "Happy Hearts Day! ❤️✨" },
];

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

const Bbys = () => {
  return (
    <div className="relative w-full h-screen max-h-screen overflow-hidden flex items-center justify-center">


      {/* 🔥 ข้อความ BlurText (อยู่บนภาพ) */}
      <div className="absolute top-12 text-center">
        <BlurText
          text="Happy Valentine’s ka"
          delay={150}
          animateBy="letters"
          direction="bottom"
          onAnimationComplete={handleAnimationComplete}
          className="text-8xl text-white font-bold"
        />
      </div>

      {/* 🌀 CircularGallery อยู่บนภาพ */}
      <div className="absolute bottom-0 w-full flex justify-center">
        <div style={{ height: "800px", width: "90vw", position: "relative" }}>
          <CircularGallery 
            items={items}
            bend={1}
            textColor="#ffffff"
            borderRadius={0.05}
          />
        </div>
      </div>
    </div>
  );
};

export default Bbys;
