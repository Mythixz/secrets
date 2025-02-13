import { useState } from "react";
import { motion } from "framer-motion";

function Card() {
  const [cardMessage, setCardMessage] = useState("You're my everything!");
  const [cardTheme, setCardTheme] = useState("heart");
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-rose-400 via-pink-500 to-red-500 p-6">
      <motion.h2 
        className="text-3xl font-semibold text-white mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Create Your Love Card 💌
      </motion.h2>

      {/* Dropdown เลือกธีมการ์ด */}
      <div className="mb-4">
        <label className="text-white font-semibold mr-2">Choose Theme:</label>
        <select
          onChange={(e) => setCardTheme(e.target.value)}
          className="p-2 rounded-lg bg-white text-black border-2 border-pink-400 shadow-md"
        >
          <option value="heart">❤️ Heart Theme</option>
          <option value="flower">🌸 Flower Theme</option>
        </select>
      </div>

      {/* Input สำหรับเขียนข้อความ */}
      <input
        type="text"
        value={cardMessage}
        onChange={(e) => setCardMessage(e.target.value)}
        placeholder="Write your message..."
        className="p-3 mt-2 rounded-lg border-2 border-pink-400 shadow-md w-80 text-black focus:ring-2 focus:ring-pink-500"
      />

      {/* แสดงรูปการ์ด */}
      {!isOpened ? (
        <motion.div
          className="cursor-pointer mt-6"
          onClick={() => setIsOpened(true)}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          whileHover={{ scale: 1.1 }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/1521/1521649.png"
            alt="Closed Card"
            className="w-32 h-32 drop-shadow-lg"
          />
          <p className="text-white mt-2 italic animate-pulse">
            Click to open the card
          </p>
        </motion.div>
      ) : (
        <motion.div
          className={`p-6 mt-6 rounded-lg shadow-xl text-center w-80 relative ${
            cardTheme === "heart"
              ? "bg-gradient-to-r from-red-500 to-pink-500 text-white"
              : "bg-gradient-to-r from-pink-200 to-rose-300 text-pink-700"
          }`}
          initial={{ opacity: 0, y: -30, scale: 0.8 }}
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

          <h3 className="text-xl font-semibold">
            {cardTheme === "heart" ? "❤️ Love Card ❤️" : "🌸 Flower Card 🌸"}
          </h3>
          <p className="mt-4 text-lg font-bold italic">{cardMessage}</p>
        </motion.div>
      )}
    </div>
  );
}

export default Card;
