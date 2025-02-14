import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { motion } from "framer-motion";

// 📍 กำหนดไอคอน Marker เอง
const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [32, 32],
});

// 📌 สถานที่พิเศษของเรา
const loveLocations = [
  {
    name: "🌳 สวนร้อยปีจุฬา",
    position: [13.7347, 100.5295] as [number, number],
    description: "สถานที่พักผ่อนสุดชิล 🌿",
  },
  {
    name: "🏢 เซ็นทรัลพระราม 9",
    position: [13.7563, 100.5669] as [number, number],
    description: "ห้างสรรพสินค้าที่เราชอบไปด้วยกัน 🛍️",
  },
  {
    name: "🛍️ เซ็นทรัลลาดพร้าว",
    position: [13.8161, 100.5612] as [number, number],
    description: "แหล่งช้อปปิ้งที่มีทุกอย่าง! 🎉",
  },
  {
    name: "🎭 เอสพานาด",
    position: [13.7695, 100.5719] as [number, number],
    description: "โรงหนังและที่เที่ยวสุดสนุก 🍿🎮",
  },
  {
    name: "🛒 ยูเนี่ยนมอลล์",
    position: [13.8121, 100.5618] as [number, number],
    description: "ตลาดเสื้อผ้าสุดแนว ราคาดี! 👕",
  },
  {
    name: "🏙️ ตึกจีทาวเวอร์",
    position: [13.7569, 100.5651] as [number, number],
    description: "ออฟฟิศสุดหรู พร้อมวิวเมือง 🏢",
  },
  {
    name: "🛍️ ตลาดจ๊อดแฟร์",
    position: [13.7488, 100.5683] as [number, number],
    description: "ตลาดนัดกลางคืนที่คึกคัก 🌙✨",
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
