import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GameReview from '../components/GameReview';
import '../styles/Home.css';

const Home = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    // Mock data แทน API (ลองใช้ก่อนต่อ backend จริง)
    const dummyGames = [
        {
            name: "R.E.P.O",
            studio: "semiwork",
            rating: 10,
            image: "https://th.bing.com/th/id/OIP.Kov0aEK8JB9oIhz5lZ9ddQHaLH?rs=1&pid=ImgDetMain"
        },
        {
            name: "Overcooked2",
            studio: "Ghost Town Games Ltd., Team17",
            rating: 9,
            image: "https://th.bing.com/th/id/OIP.I5DAAmWSFlUNQNmb-Y5SpwHaHa?rs=1&pid=ImgDetMain"
        },
        {
            name: "Stardew Valley",
            studio:  "ConcernedApe",
            rating: 10,
            image: "https://th.bing.com/th/id/R.2c4bf1b641c57e84b40df079ec16984c?rik=SNf3Hc1w2Nti4g&pid=ImgRaw&r=0"
        },
        {
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

  return (
    <div className="home-container">
        <h1 className="section-title">GAME</h1>
      <GameReview games={games} />

    </div>
  );
};

export default Home;
