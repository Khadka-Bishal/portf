import React, { useState, useEffect } from "react";

interface TicTacToeProps {
  onClose: () => void;
}

const TicTacToe: React.FC<TicTacToeProps> = ({ onClose }) => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">("X");
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState<"X" | "O" | null>(null);
  const [gameStarted, setGameStarted] = useState(false);

  const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // columns
    [0, 4, 8],
    [2, 4, 6], // diagonals
  ];

  const checkWinner = (boardState: string[]) => {
    for (const line of winningLines) {
      const [a, b, c] = line;
      if (
        boardState[a] &&
        boardState[a] === boardState[b] &&
        boardState[a] === boardState[c]
      ) {
        return boardState[a] as "X" | "O";
      }
    }
    return null;
  };

  const checkTie = (boardState: string[]) => {
    return boardState.every((cell) => cell !== "");
  };

  const getBestMove = (boardState: string[]) => {
    // Simple AI: find the best move using minimax algorithm
    const availableMoves = boardState
      .map((cell, index) => (cell === "" ? index : -1))
      .filter((index) => index !== -1);

    if (availableMoves.length === 0) return -1;

    // If it's the first move, choose center or corner
    if (availableMoves.length === 9) {
      return 4; // center
    }

    // Try to win
    for (const move of availableMoves) {
      const testBoard = [...boardState];
      testBoard[move] = "O";
      if (checkWinner(testBoard) === "O") {
        return move;
      }
    }

    // Block player from winning
    for (const move of availableMoves) {
      const testBoard = [...boardState];
      testBoard[move] = "X";
      if (checkWinner(testBoard) === "X") {
        return move;
      }
    }

    // Prefer center, then corners, then edges
    const center = 4;
    const corners = [0, 2, 6, 8];
    const edges = [1, 3, 5, 7];

    if (availableMoves.includes(center)) return center;

    for (const corner of corners) {
      if (availableMoves.includes(corner)) return corner;
    }

    for (const edge of edges) {
      if (availableMoves.includes(edge)) return edge;
    }

    return availableMoves[0];
  };

  const makeComputerMove = () => {
    if (gameOver || currentPlayer !== "O") return;

    setTimeout(() => {
      const computerMove = getBestMove(board);
      if (computerMove !== -1) {
        const newBoard = [...board];
        newBoard[computerMove] = "O";
        setBoard(newBoard);

        const newWinner = checkWinner(newBoard);
        if (newWinner) {
          setWinner(newWinner);
          setGameOver(true);
        } else if (checkTie(newBoard)) {
          setGameOver(true);
        } else {
          setCurrentPlayer("X");
        }
      }
    }, 500); // Small delay to make it feel more natural
  };

  const handleCellClick = (index: number) => {
    if (board[index] || gameOver || currentPlayer !== "X") return;

    const newBoard = [...board];
    newBoard[index] = "X";
    setBoard(newBoard);

    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
      setGameOver(true);
    } else if (checkTie(newBoard)) {
      setGameOver(true);
    } else {
      setCurrentPlayer("O");
    }
  };

  useEffect(() => {
    if (currentPlayer === "O" && !gameOver) {
      makeComputerMove();
    }
  }, [currentPlayer, gameOver, board]);

  const resetGame = () => {
    setBoard(Array(9).fill(""));
    setCurrentPlayer("X");
    setGameOver(false);
    setWinner(null);
    setGameStarted(false);
  };

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <div className="text-center mb-4">
        <h3 className="text-lg font-bold mb-2">⭕ Tic-Tac-Toe</h3>
        {!gameOver ? (
          <div className="text-sm">Player: {currentPlayer}</div>
        ) : (
          <div className="text-sm">
            {winner ? (
              <span
                className={winner === "X" ? "text-green-400" : "text-red-400"}
              >
                {winner === "X" ? "You Win!" : "Computer Wins!"}
              </span>
            ) : (
              <span className="text-yellow-400">It's a Tie!</span>
            )}
          </div>
        )}
      </div>

      <div className="grid grid-cols-3 gap-1 bg-gray-800 p-3 rounded">
        {board.map((cell, index) => (
          <button
            key={index}
            className={`w-12 h-12 border border-gray-600 bg-gray-900 text-white text-xl font-bold hover:bg-gray-700 transition-colors ${
              cell === "X"
                ? "text-blue-400"
                : cell === "O"
                ? "text-red-400"
                : "text-gray-600"
            } ${
              !cell && !gameOver && currentPlayer === "X"
                ? "cursor-pointer"
                : "cursor-default"
            } ${currentPlayer === "O" && !gameOver ? "opacity-50" : ""}`}
            onClick={() => handleCellClick(index)}
            disabled={cell !== "" || gameOver || currentPlayer !== "X"}
          >
            {cell}
          </button>
        ))}
      </div>

      <div className="mt-4 text-center">
        <button
          className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
          onClick={resetGame}
        >
          New Game
        </button>
      </div>

      <div className="mt-2 text-xs text-gray-400 text-center">
        <div>You: X (Blue) • Computer: O (Red)</div>
        <div>Click squares to play</div>
      </div>
    </div>
  );
};

export default TicTacToe;
