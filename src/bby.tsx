import GridMotion from './blocks/Backgrounds/GridMotion/GridMotion';
import './App.css'; // แน่ใจว่าได้ import ไฟล์ CSS
import bbyImage from './assets/bby.jpg';  // นำเข้าไฟล์ภาพจากโฟลเดอร์ src/assets
import bby3Image from './assets/bby3.jpg';  // นำเข้าไฟล์ภาพจากโฟลเดอร์ src/assets
import bby4Image from './assets/sky.jpg';  // นำเข้าไฟล์ภาพจากโฟลเดอร์ src/assets
import bby5Image from './assets/bby4.jpg';  // นำเข้าไฟล์ภาพจากโฟลเดอร์ src/assets
import bby6Image from './assets/bby5.jpg';  // นำเข้าไฟล์ภาพจากโฟลเดอร์ src/assets
import bby7Image from './assets/bby6.jpg';  // นำเข้าไฟล์ภาพจากโฟลเดอร์ src/assets
import bby8Image from './assets/bby8.jpg';  // นำเข้าไฟล์ภาพจากโฟลเดอร์ src/assets
import bby9Image from './assets/bby9.jpg';  // นำเข้าไฟล์ภาพจากโฟลเดอร์ src/assets
import bby10Image from './assets/bby10.jpg';  // นำเข้าไฟล์ภาพจากโฟลเดอร์ src/assets
import bby11Image from './assets/bby11.jpg';  // นำเข้าไฟล์ภาพจากโฟลเดอร์ src/assets


function App() {
  const items = [
    <img src={bbyImage} alt="Item 1" />, 
    <img src={bby3Image} alt="Item 2" />, 
    <img src={bby4Image} alt="Item 3" />, 
    <img src={bby5Image} alt="Item 4" />, 
    <img src={bbyImage} alt="Item 5" />, 
    <img src={bby6Image} alt="Item 6" />, 
    <img src={bbyImage} alt="Item 7" />, 
    <img src={bby5Image} alt="Item 8" />, 
    <img src={bby8Image} alt="Item 9" />, 
    <img src={bby7Image} alt="Item 10" />, 
    <img src={bby3Image} alt="Item 11" />, 
    <img src={bby5Image} alt="Item 12" />, 
    <img src={bby9Image} alt="Item 13" />,
    <img src={bbyImage} alt="Item 14" />, 
    <img src={bby11Image} alt="Item 15" />, 
    <img src={bby5Image} alt="Item 16" />, 
    <img src={bby4Image} alt="Item 17" />, 
    <img src={bbyImage} alt="Item 18" />, 
    <img src={bby10Image} alt="Item 19" />, 
    <img src={bby7Image} alt="Item 20" />, 
    <img src={bbyImage} alt="Item 21" />, 
    <img src={bby3Image} alt="Item 22" />, 
    <img src={bby9Image} alt="Item 23" />, 
    <img src={bby3Image} alt="Item 24" />, 
    <img src={bby4Image} alt="Item 25" />, 
    <img src={bbyImage} alt="Item 26" />, 
    <img src={bby11Image} alt="Item 27" />, 
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
