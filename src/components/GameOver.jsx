import "./GameOver.css";

export default function GameOver({ winner, setWinner, setGameOver, gameOver, setBoard, setActivePlayer }) {
    return (
        <div className="gameover">
            <p>The Winner is {winner}</p>
            <button onClick={() => {
                setWinner("");
                setGameOver(!gameOver);
                setBoard([
                    ['', '', ''],
                    ['', '', ''],
                    ['', '', ''],
                ]);
                setActivePlayer("X");
                window.scrollTo(0, 0);

            }}>Play Again!</button>
        </div>
    )
}