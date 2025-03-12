import "./GameBoard.css";


export default function GameBoard({ board, setBoard, activePlayer, setActivePlayer, setGameOver, gameOver, setWinner, userName1, userName2 }) {

    function checkWin(row, col, board) {

        function getWin(deltaRow, deltaCol) {
            let tempRow = row + deltaRow;
            let tempCol = col + deltaCol;
            let count = 0;
            while (tempRow >= 0 && tempRow < 3 && tempCol >= 0 && tempCol < 3 && board[tempRow][tempCol] == board[row][col]) {
                count++;
                tempRow += deltaRow;
                tempCol += deltaCol;
            }
            return count;
        }
        return (getWin(0, -1) + 1 + getWin(0, 1)) === 3 || (getWin(-1, 0) + 1 + getWin(1, 0)) === 3 || (getWin(-1, -1) + 1 + getWin(1, 1)) === 3 || (getWin(-1, 1) + 1 + getWin(1, -1)) === 3;
    }

    function handleButtonClick(rowI, colI) {
        let newBoard = board.map((row, rowIndex) =>
            row.map((col, colIndex) =>
                rowIndex == rowI && colIndex == colI ? activePlayer : col
            )
        )
        setBoard(newBoard);
        if (checkWin(rowI, colI, newBoard)) {
            setGameOver(!gameOver);
            setWinner(newBoard[rowI][colI] == "X" ? userName1 : userName2);
        }
        setActivePlayer(activePlayer == "X" ? "O" : "X");
    }


    return (
        <div className="gameboard">
            {board.map((row, rowIndex) => (
                <div className="row" key={rowIndex}>
                    {
                        row.map((col, colIndex) => (
                            <div className="col" key={colIndex} onClick={() => { handleButtonClick(rowIndex, colIndex) }}>
                                {col}
                            </div>
                        ))
                    }

                </div>

            ))}
        </div>
    )
}