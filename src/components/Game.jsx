import GameBoard from "./GameBoard";
import Player from "./Player";
import "./Game.css";
import { useState } from "react";

export default function Game({ board, setBoard, activePlayer, setActivePlayer, setGameOver, gameOver, setWinner }) {

    const [userName1, setUserName1] = useState("Player 1");
    const [userName2, setUserName2] = useState("Player 2");

    return (
        <div className="game">
            <div className="players">
                <Player name="Player 1" chosen="X" activePlayer={activePlayer} userName={userName1} setUserName={setUserName1}
                />
                <Player name="Player 2" chosen="O" activePlayer={activePlayer} userName={userName2} setUserName={setUserName2}
                />
            </div>
            <GameBoard board={board} setBoard={setBoard} activePlayer={activePlayer} setActivePlayer={setActivePlayer} setGameOver={setGameOver} gameOver={gameOver} setWinner={setWinner} userName1={userName1} userName2={userName2} />
        </div>
    )
}