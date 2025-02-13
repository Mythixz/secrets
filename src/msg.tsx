import { useState } from "react";
import { motion } from "framer-motion";

function LoveLetter() {
  const [message, setMessage] = useState("Happy Valentine's Day!");
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-rose-400 via-pink-500 to-red-500 p-6">
      <motion.h2
        className="text-3xl font-semibold text-white mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Write Your Love Letter 💌
      </motion.h2>

      {!isOpened ? (
        <motion.div
          className="cursor-pointer flex flex-col items-center"
          onClick={() => setIsOpened(true)}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          whileHover={{ scale: 1.1 }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/2171/2171999.png"
            alt="Closed Envelope"
            className="w-32 h-32 drop-shadow-lg"
          />
          <p className="text-white mt-2 italic animate-pulse">Click to open</p>
        </motion.div>
      ) : (
        <motion.div
          className="p-6 bg-white rounded-lg shadow-xl text-center max-w-md relative"
          initial={{ opacity: 0, y: -50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* ปุ่มปิดจดหมาย */}
          <button
            onClick={() => setIsOpened(false)}
            className="absolute top-2 right-2 bg-gray-100 text-gray-700 rounded-full px-3 py-1 shadow-md hover:bg-gray-200 transition-all"
          >
            ❌
          </button>

          <h3 className="text-xl font-semibold text-pink-500 mb-4">
            Your Love Message 💖
          </h3>

          {/* Input สำหรับเขียนข้อความ */}
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 border-2 border-pink-300 rounded-lg text-black focus:ring-2 focus:ring-pink-400 transition-all"
            placeholder="Write your love message here"
          />

          {/* แสดงข้อความที่พิมพ์ */}
          <p className="mt-4 text-lg font-bold text-red-600 italic animate-fadeIn">
            {message}
          </p>
        </motion.div>
      )}
    </div>
  );
}

export default LoveLetter;
