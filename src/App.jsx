import React from "react";
import "./App.css";

import {
  GiGamepad,
  GiGameConsole,
  GiHealthPotion,
  GiRocket,
} from "react-icons/gi";

import CardBackground from "./components/card/CardBackground";
import Content from "./components/content/Content";
import Materi2 from "./components/materi/Materi2.jsx";
import Materi1 from "./components/materi/Materi1.jsx";
import Game1 from "./components/game/Game1.jsx";
import Game2 from "./components/game/Game2.jsx";

import Image from "./assets/Image.jsx";
const content = [
  {
    title: "SPIDER-MAN 2",
    image: Image.Poster1,
    platform: "PlayStation 5",
    release_date: "October 20, 2023",
    genre: "Fighting game, Action-adventure game",
  },
  {
    title: "ELDEN RING",
    image: Image.Poster2,
    platform: "PlayStation, Xbox, Microsoft Windows",
    release_date: "February 25, 2022",
    genre: "RPG, Dark Fantasy, Open World",
  },
  {
    title: "It Takes Two",
    image: Image.Poster3,
    platform: "PlayStation, Xbox, Nitendo, Microsoft Windows",
    release_date: "March 26, 2021",
    genre: "Co-op, Multiplayer, Split Screen",
  },
  {
    title: "The Legend of Zelda Breath of The Wild",
    image: Image.Poster4,
    platform: "Nitendo Switch, Wii U",
    release_date: "March 3, 2017",
    genre: " Action-adventure game, Puzzle Video Game",
  },
  {
    title: "Super Mario Bros. Wonder",
    image: Image.Poster5,
    platform: "Nintendo Switch",
    release_date: "October 20, 2023",
    genre: "Platform game",
  },
  {
    title: "Clash of Clans",
    image: Image.Poster6,
    platform: " Android, iOS",
    release_date: "August 2, 2012",
    genre: "Real-time strategy",
  },
];

function App() {
  return (
    <>
      {/* Container Landing Page */}
      <div className="container container-landing">
        <div className="contentLandingPage">
          <h1 className="text-center judul">Atma Jaya Game Center</h1>
          <p className="text">
            Unleash Your Playful Spirit at Atma Jaya Game Center
          </p>
        </div>
        <GiGamepad className="iconGamePad" />
        <GiGameConsole className="iconGameConsole" />
        <GiHealthPotion className="iconHealthPotion" />
        <GiRocket className="iconRocket" />
      </div>
      {/* Container Bawah */}
      <div className="container container-content">
        <div>
          <h1 className="judulContent">Game 1</h1>
          <CardBackground>
            <Game1 />
          </CardBackground>
        </div>
      </div>
      {/* COntainer Untuk Materi 1 */}
      <div className="container container-content">
        <div>
          <h1 className="judulContent">Game 2</h1>
          <CardBackground>
            <Game2 />
          </CardBackground>
        </div>
      </div>
    </>
  );
}

export default App;
