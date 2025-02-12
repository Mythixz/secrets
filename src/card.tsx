import { useState } from 'react';
import './card.css'; // แน่ใจว่าได้ import ไฟล์ CSS
import GridMotion from '@blocks/GridMotion';



function Card() {
  const [cardMessage, setCardMessage] = useState("You're my everything!");
  const [cardTheme, setCardTheme] = useState("heart");

  return (
    <div>
      <select onChange={(e) => setCardTheme(e.target.value)} className="p-2 rounded">
        <option value="heart">Heart Theme</option>
        <option value="flower">Flower Theme</option>
      </select>
      <input
        type="text"
        value={cardMessage}
        onChange={(e) => setCardMessage(e.target.value)}
        placeholder="Write your message"
        className="mt-2 p-2 rounded"
      />
      <div className={`card-preview ${cardTheme}`}>
        <p>{cardMessage}</p>
      </div>
    </div>
  );
}

export default Card;
