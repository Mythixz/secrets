import { useState } from 'react';

function LoveMessage() {
  const [message, setMessage] = useState("Happy Valentine's Day!");

  return (
    <div className="text-center mt-6">
      <h2 className="text-xl font-semibold">Enter your love message:</h2>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="mt-2 p-2 rounded text-gray-800"
      />
      <p className="mt-4 text-2xl">{message}</p>
    </div>
  );
}

export default LoveMessage;
