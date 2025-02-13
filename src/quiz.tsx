import { useState } from "react";
import { motion } from "framer-motion";

const quizQuestions = [
  {
    question: "วันแรกที่เราเจอกันคือที่ไหน?",
    options: ["คาเฟ่", "ห้างสรรพสินค้า", "สวนสาธารณะ", "มหาวิทยาลัย"],
    answer: "มหาวิทยาลัย",
  },
  {
    question: "สีที่ฉันชอบที่สุดคืออะไร?",
    options: ["แดง", "ชมพู", "ฟ้า", "ม่วง"],
    answer: "ชมพู",
  },
  {
    question: "อาหารที่ฉันชอบมากที่สุด?",
    options: ["ซูชิ", "สเต็ก", "ก๋วยเตี๋ยว", "ข้าวมันไก่"],
    answer: "ซูชิ",
  },
];

function LoveQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleAnswerClick = (selectedOption: string) => {
    setSelectedAnswer(selectedOption);

    setTimeout(() => {
      if (selectedOption === quizQuestions[currentQuestion].answer) {
        setScore(score + 1);
      }

      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < quizQuestions.length) {
        setCurrentQuestion(nextQuestion);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }, 800); // เพิ่ม delay ให้การเลือกคำตอบมี effect นิดนึง
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-rose-400 via-pink-500 to-red-500 p-6">
      <motion.h2
        className="text-3xl font-semibold text-white mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        💖 Love Quiz 💖
      </motion.h2>

      {!showResult ? (
        <motion.div
          key={currentQuestion}
          className="bg-white p-6 rounded-lg shadow-xl text-center w-96"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold text-red-500 mb-4">
            {quizQuestions[currentQuestion].question}
          </h3>
          <div className="flex flex-col space-y-3">
            {quizQuestions[currentQuestion].options.map((option, index) => (
              <motion.button
                key={index}
                onClick={() => handleAnswerClick(option)}
                className={`p-3 rounded-lg w-full transition-all ${
                  selectedAnswer
                    ? option === quizQuestions[currentQuestion].answer
                      ? "bg-green-500 text-white"
                      : "bg-gray-300 text-gray-600"
                    : "bg-pink-500 text-white hover:bg-pink-600"
                }`}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: selectedAnswer ? 1 : 1.05 }}
              >
                {option}
              </motion.button>
            ))}
          </div>
        </motion.div>
      ) : (
        <motion.div
          className="bg-white p-6 rounded-lg shadow-xl text-center w-96"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold text-red-500">🎉 คะแนนของคุณ 🎉</h3>
          <p className="text-lg mt-4 text-pink-600 font-bold">
            {score} / {quizQuestions.length}
          </p>
          {score === quizQuestions.length ? (
            <p className="text-green-500 mt-2 font-semibold">
              💖 คุณรู้จักฉันดีที่สุด! 💖
            </p>
          ) : (
            <p className="text-gray-500 mt-2">ยังต้องเรียนรู้กันอีกนิดนะ 😉</p>
          )}
          <motion.button
            className="mt-4 px-6 py-2 bg-pink-500 text-white rounded-lg shadow-md hover:bg-pink-600 transition"
            onClick={() => {
              setCurrentQuestion(0);
              setScore(0);
              setShowResult(false);
              setSelectedAnswer(null);
            }}
            whileHover={{ scale: 1.05 }}
          >
            🔄 ลองเล่นใหม่
          </motion.button>
        </motion.div>
      )}
    </div>
  );
}

export default LoveQuiz;
