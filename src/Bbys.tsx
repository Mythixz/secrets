import CircularGallery from './blocks/Components/CircularGallery/CircularGallery';
import bbyImage from './assets/bby.jpg';  // นำเข้าไฟล์ภาพจากโฟลเดอร์ src/assets

const items = [
    { image: bbyImage, text: "Train Track" },
    { image: "/assets/bby2.jpg", text: "Santorini" },
    { image: "/assets/image3.jpg", text: "Blurry Lights" },
    { image: "/assets/image4.jpg", text: "Coastline" },
  ];
  
  

const Bbys = () => {
  return (
    <div className="relative w-full h-screen max-h-screen overflow-hidden flex items-center justify-center">
      <div style={{ height: '600px', width: '80vw', position: 'relative' }}>
        <CircularGallery 
          items={items}  /* ✅ ส่ง `items` ไปให้ CircularGallery */
          bend={1} 
          textColor="#ffffff" 
          borderRadius={0.05} 
        />
      </div>
    </div>
  );
};

export default Bbys;
