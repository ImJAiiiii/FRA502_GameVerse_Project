import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GameReview from '../components/GameReview';
import '../styles/Home.css';
import Categories from '../components/Categories';
import BestGames from '../components/BestGames';

const Home = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    // Mock data แทน API (ลองใช้ก่อนต่อ backend จริง)
    const dummyGames = [
        {
            id: 0,
            name: "R.E.P.O",
            studio: "semiwork",
            rating: 10,
            image: "https://th.bing.com/th/id/OIP.Kov0aEK8JB9oIhz5lZ9ddQHaLH?rs=1&pid=ImgDetMain"
        },
        {
          id: 1,
            name: "Overcooked2",
            studio: "Ghost Town Games Ltd., Team17",
            rating: 9,
            image: "https://th.bing.com/th/id/OIP.I5DAAmWSFlUNQNmb-Y5SpwHaHa?rs=1&pid=ImgDetMain"
        },
        {
          id: 2,
            name: "Stardew Valley",
            studio:  "ConcernedApe",
            rating: 10,
            image: "https://th.bing.com/th/id/R.2c4bf1b641c57e84b40df079ec16984c?rik=SNf3Hc1w2Nti4g&pid=ImgRaw&r=0"
        },
        {
          id: 3,
            name: "inZOI",
            studio: "inZOI Studio",
            rating: 9,
            image: "https://www.gameshub.com/wp-content/uploads/sites/5/2024/08/inzoi-game.jpeg"
        },
        {
            name: "Minecraft",
            studio: "Mojang Studios",
            rating: 9,
            image: "https://th.bing.com/th/id/R.d91676db844e7dd472cb8136c05a587f?rik=1c10UPgzQHqEPA&pid=ImgRaw&r=0"
        },
        {
            name: "teamfight tactics",
            studio: "Riot Game",
            rating: 8,
            image: "https://th.bing.com/th/id/OIP.gzY2lHiQWTu2rkNZ2-tcwQHaHa?rs=1&pid=ImgDetMain"
        },
        {
            name: "Naraka",
            studio: "24 Entertainment",
            rating: 7,
            image: "https://cdn1.epicgames.com/offer/0c6aee83b9b64372bf44a043001325f2/EGS_NARAKABLADEPOINT_24Entertainment_S2_1200x1600-0828f82ab96ff2be38169b992ddef860"
        },
        {
            name: "Apex Legends",
            studio: "Respawn",
            rating: 9,
            image: "https://th.bing.com/th/id/R.b84d0b927b4c02e1bae6b79cbcc72e6b?rik=6Q1Z0OHN9nn56Q&pid=ImgRaw&r=0"
        },
        {
            name: "Sea of thieves",
            studio: "Rare",
            rating: 8,
            image:"https://th.bing.com/th/id/OIP.p1j8gxABibn9C7vxKvzqPQHaJb?rs=1&pid=ImgDetMain"
        },
        {
            name: "A Little to the Left",
            studio: "Inferno",
            rating: 9,
            image: "https://store-images.s-microsoft.com/image/apps.47868.13709503452579203.2424d951-5f62-4cd0-816f-1d45c87c1dc3.66574724-828d-487e-8e65-165c5cc1eb6b"
        },
        {
          name: "Hogwarts Legacy",
          studio: "Avalanche Software",
          rating: 9,
          image: "https://th.bing.com/th/id/OIP.iXkOkb7KXx5zsrNzP3Ml3QHaHa?rs=1&pid=ImgDetMain"
        }


    ];

    setGames(dummyGames);
    }, []);

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
      <GameReview games={games} />
      <Categories />
      <BestGames bestGames={dummyBestGames} />
    </div>
  );
};

export default Home;
