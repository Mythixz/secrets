import GridMotion from './blocks/Backgrounds/GridMotion/GridMotion';
import './App.css'; // แน่ใจว่าได้ import ไฟล์ CSS
import bbyImage from './assets/bby.jpg';  // นำเข้าไฟล์ภาพจากโฟลเดอร์ src/assets

function App() {
  const items = [
    <img src={bbyImage} alt="Item 1" />, 
    <img src={bbyImage} alt="Item 2" />, 
    <img src={bbyImage} alt="Item 3" />, 
    <img src={bbyImage} alt="Item 4" />, 
    <img src={bbyImage} alt="Item 5" />, 
    <img src={bbyImage} alt="Item 6" />, 
    <img src={bbyImage} alt="Item 7" />, 
    <img src={bbyImage} alt="Item 8" />, 
    <img src={bbyImage} alt="Item 9" />, 
    <img src={bbyImage} alt="Item 10" />, 
    <img src={bbyImage} alt="Item 11" />, 
    <img src={bbyImage} alt="Item 12" />, 
    <img src={bbyImage} alt="Item 13" />,
    <img src={bbyImage} alt="Item 14" />, 
    <img src={bbyImage} alt="Item 15" />, 
    <img src={bbyImage} alt="Item 16" />, 
    <img src={bbyImage} alt="Item 17" />, 
    <img src={bbyImage} alt="Item 18" />, 
    <img src={bbyImage} alt="Item 19" />, 
    <img src={bbyImage} alt="Item 20" />, 
    <img src={bbyImage} alt="Item 21" />, 
    <img src={bbyImage} alt="Item 22" />, 
    <img src={bbyImage} alt="Item 23" />, 
    <img src={bbyImage} alt="Item 24" />, 
    <img src={bbyImage} alt="Item 25" />, 
    <img src={bbyImage} alt="Item 26" />, 
    <img src={bbyImage} alt="Item 27" />, 
    // เพิ่มรายการอื่น ๆ ตามต้องการ
  ];

  return (
    <div className="App">
      <h1 className="text-center text-3xl font-bold py-6">Items Grid</h1>
      <GridMotion items={items} />
    </div>
  );
}

export default App;
