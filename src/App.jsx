import './App.css';
import Header from './components/Header';
import Game from './components/Game';
import GameOver from './components/GameOver';
import { useState } from 'react';

function App() {

  const [activePlayer, setActivePlayer] = useState("X");

  const [board, setBoard] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]
  );

  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState("");

  return (
    <div className="app">
      <Header />
      {gameOver ? <GameOver winner={winner} setWinner={setWinner} setGameOver={setGameOver} gameOver={gameOver} setBoard={setBoard} setActivePlayer={setActivePlayer} /> : <></>}
      {!gameOver ? <Game
        board={board}
        setBoard={setBoard}
        activePlayer={activePlayer}
        setActivePlayer={setActivePlayer}
        setGameOver={setGameOver}
        gameOver={gameOver}
        setWinner={setWinner}
        className={gameOver ? "hide" : "show"}
      /> : <></>}
    </div>
  )
}
export default App