import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GameReview from '../components/GameReview';
import '../styles/Home.css';
import Categories from '../components/Categories';
import BestGames from '../components/BestGames';

const Home = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    // ดึงข้อมูลจาก localStorage และแสดงเกมที่ถูกสร้างขึ้น
    const savedGames = Object.keys(localStorage) // ดึง key ทั้งหมดใน localStorage
      .filter((key) => key.startsWith('review_')) // กรองเอาเฉพาะรีวิวที่ถูกบันทึก
      .map((key) => JSON.parse(localStorage.getItem(key))); // ดึงข้อมูลแต่ละรีวิว

    setGames(savedGames); // ตั้งค่าเกมที่ได้จาก localStorage
  }, []);


  // ❗ ยังใช้ dummy สำหรับ BestGames ไปก่อน หรือจะเปลี่ยนเป็น backend ก็ได้
  const dummyBestGames = [
    { name: 'Clair Obscur: Expedition 33', image: 'https://th.bing.com/th/id/OIF.Bv7krMAF5DNoPWVTPu9rJw?rs=1&pid=ImgDetMain' },
    { name: 'Counter-Strike 2', image: 'https://th.bing.com/th/id/OIP.8U5ZCmfkxG-uzP86lXT5FQHaLH?rs=1&pid=ImgDetMain' },
    { name: 'PUBG: BATTLEGROUNDS', image: 'https://th.bing.com/th/id/R.b08607497e65338efec38ed09c870127?rik=y9qMdwELbj6Lvw&pid=ImgRaw&r=0'},
    { name: 'R.E.P.O.', image: 'https://th.bing.com/th/id/OIP.Kov0aEK8JB9oIhz5lZ9ddQHaLH?rs=1&pid=ImgDetMain'},
    { name: 'Dota 2', image: 'https://assets-prd.ignimgs.com/2021/12/07/dota-2-1638917128883.jpg?width=300&crop=1:1%2Csmart&dpr=2'},
    { name: 'Monster Hunter Wilds', image: 'https://th.bing.com/th/id/OIP._MTcAmpMh0x4pU-t9L3hYAHaHa?rs=1&pid=ImgDetMain'},
    { name: 'NARAKA: BLADEPOINT', image: 'https://cdn1.epicgames.com/offer/0c6aee83b9b64372bf44a043001325f2/EGS_NARAKABLADEPOINT_24Entertainment_S2_1200x1600-0828f82ab96ff2be38169b992ddef860'},
    { name: 'eFootball™', image: 'https://play-lh.googleusercontent.com/wY8oHL1inV4rqShlIVDuQkTiM0a97aY37rkS45wz7kKr_7F1zc4dchMHHjF44bBmpIE'},
    { name: 'Once Human', image: 'https://cdn.wccftech.com/wp-content/uploads/2024/07/once-human-pc-HD-scaled.jpg'},
    { name: 'The Elder Scrolls IV: Oblivion Remastered', image: 'https://images.g2a.com/470x276/1x1x0/the-elder-scrolls-iv-oblivion-remaster-xbox-series-x-s-windows-10-xbox-live-key-global-i10000510788016/4c39165b69644af197ecde49'},
  ];

  return (
    <div className="home-container">
      <h1 className="section-title">GAME</h1>

      {/* ✅ ใช้ข้อมูลจาก backend */}
      <GameReview games={games} />

      {/* ✅ Category list (hardcoded หรือจะเชื่อม backend ก็ได้) */}
      <Categories />

      {/* ✅ Best game list ยังใช้ mock ได้ */}
      <BestGames bestGames={dummyBestGames} />
    </div>
  );
};

export default Home;
