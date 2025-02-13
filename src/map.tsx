import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { motion } from "framer-motion";

// 📍 กำหนดไอคอน Marker เอง
const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/535/535188.png",
  iconSize: [32, 32],
});

// 📌 สถานที่พิเศษของเรา
const loveLocations = [
  {
    name: "💖 จุดเริ่มต้นของเรา",
    position: [13.7563, 100.5018] as [number, number],
    description: "ที่ที่เราพบกันครั้งแรก 💕",
  },
  {
    name: "🍰 คาเฟ่สุดน่ารัก",
    position: [13.7401, 100.5231] as [number, number],
    description: "ที่ที่เรานั่งคุยกันเป็นชั่วโมง ☕",
  },
  {
    name: "🌅 จุดชมวิวที่ไปด้วยกัน",
    position: [13.7281, 100.5432] as [number, number],
    description: "วันที่เราไปดูพระอาทิตย์ตกด้วยกัน 🌇",
  },
];

function LoveMap() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-rose-400 via-pink-500 to-red-500 p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-semibold text-white mb-6">📍 Love Map 📍</h2>

      {/* 🗺️ Container ของแผนที่ */}
      <motion.div
        className="w-full max-w-5xl h-[500px] rounded-lg shadow-xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <MapContainer
          center={[13.7563, 100.5018]} // เริ่มต้นที่กรุงเทพฯ
          zoom={12}
          scrollWheelZoom={true}
          className="w-full h-full"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {/* 📌 วาง Marker สำหรับแต่ละจุด */}
          {loveLocations.map((location, index) => (
            <Marker key={index} position={location.position} icon={customIcon}>
              <Popup>
                <div className="p-2">
                  <h3 className="text-lg font-semibold text-pink-600">
                    {location.name}
                  </h3>
                  <p className="text-sm text-gray-700">{location.description}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </motion.div>
    </motion.div>
  );
}

export default LoveMap;
