import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Phaser from "phaser";
import { config } from "./Game/initGame";

const App = () => {
  const [count, setCount] = useState(0);
  let game: Phaser.Game;

  useEffect(() => {
    game = new Phaser.Game(config);
  }, []);

  return <div id="game-container"></div>;
};

export default App;
