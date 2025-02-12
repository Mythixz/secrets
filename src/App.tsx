import { useState, useEffect } from 'react';
import './App.css'; // แน่ใจว่าได้ import ไฟล์ CSS

function CountdownTimer() {
  const targetDate = new Date("2025-02-14T00:00:00");
  
  const [timeLeft, setTimeLeft] = useState<number>(targetDate.getTime() - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(targetDate.getTime() - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval); 
  }, [targetDate]);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Countdown to Valentine's Day</h1>
        <div className="text-2xl font-semibold">
          <span>{days} Days </span>
          <span>{hours} Hours </span>
          <span>{minutes} Minutes </span>
          <span>{seconds} Seconds </span>
        </div>
      </div>
    </div>
  );
}

export default CountdownTimer;
