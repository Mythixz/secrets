import { useState } from "react";
import { motion } from "framer-motion";

function Card() {
  const [cardMessage, setCardMessage] = useState("You're my everything!");
  const [cardTheme, setCardTheme] = useState("heart");
  const [isOpened, setIsOpened] = useState(false);

  // กำหนดธีมการ์ด
  const themes = {
    heart: "bg-gradient-to-r from-red-500 to-pink-500 text-white",
    flower: "bg-gradient-to-r from-pink-200 to-rose-300 text-pink-700",
    night: "bg-gradient-to-r from-blue-900 to-indigo-500 text-white",
    chocolate: "bg-gradient-to-r from-yellow-700 to-brown-500 text-white",
    fireworks: "bg-gradient-to-r from-purple-500 to-indigo-600 text-white",
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-rose-400 via-pink-500 to-red-500 p-6">
      <motion.h2 
        className="text-4xl font-bold text-white mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        🌟 สร้างการ์ดสุดพิเศษ 💌
      </motion.h2>

      {/* Dropdown เลือกธีมการ์ด */}
      <div className="mb-4">
        <label className="text-white font-semibold mr-2">เลือกธีมการ์ด:</label>
        <select
          onChange={(e) => setCardTheme(e.target.value)}
          className="p-3 rounded-lg bg-white text-black border-2 border-pink-400 shadow-md"
        >
          <option value="heart">❤️ Heart Theme</option>
          <option value="flower">🌸 Flower Theme</option>
          <option value="night">🌙 Night Sky Theme</option>
          <option value="chocolate">🍫 Chocolate Theme</option>
          <option value="fireworks">🎆 Fireworks Theme</option>
        </select>
      </div>

      {/* Input สำหรับเขียนข้อความ */}
      <input
        type="text"
        value={cardMessage}
        onChange={(e) => setCardMessage(e.target.value)}
        placeholder="Write your message..."
        className="p-4 mt-2 rounded-lg border-2 border-pink-400 shadow-md w-96 text-black focus:ring-2 focus:ring-pink-500"
      />

      {/* แสดงรูปการ์ด */}
      {!isOpened ? (
        <motion.div
          className="cursor-pointer mt-8"
          onClick={() => setIsOpened(true)}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          whileHover={{ scale: 1.1 }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/1521/1521649.png"
            alt="Closed Card"
            className="w-40 h-40 drop-shadow-lg"
          />
          <p className="text-white mt-2 italic animate-pulse">
            📩 Click to open the card
          </p>
        </motion.div>
      ) : (
        <motion.div
          className={`p-8 mt-8 rounded-xl shadow-2xl text-center w-96 relative ${themes[cardTheme as keyof typeof themes]}`}
          initial={{ opacity: 0, y: -50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* ปุ่มปิดการ์ด */}
          <button
            onClick={() => setIsOpened(false)}
            className="absolute top-2 right-2 bg-white text-pink-700 rounded-full px-3 py-1 shadow hover:bg-gray-200 transition-all"
          >
            ❌
          </button>

          <h3 className="text-2xl font-bold">
            {cardTheme === "heart" ? "❤️ Love Card ❤️" : ""}
            {cardTheme === "flower" ? "🌸 Flower Card 🌸" : ""}
            {cardTheme === "night" ? "🌙 Night Sky Card 🌙" : ""}
            {cardTheme === "chocolate" ? "🍫 Chocolate Card 🍫" : ""}
            {cardTheme === "fireworks" ? "🎆 Fireworks Card 🎆" : ""}
          </h3>
          <p className="mt-4 text-lg font-bold italic">{cardMessage}</p>
        </motion.div>
      )}
    </div>
  );
}

export default Card;
