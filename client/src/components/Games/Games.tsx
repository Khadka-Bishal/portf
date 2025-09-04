import React, { useState, useEffect } from "react";
import TicTacToe from "./TicTacToe";

interface GamesProps {
  onClose: () => void;
}

const Games: React.FC<GamesProps> = ({ onClose }) => {
  const [selectedGame, setSelectedGame] = useState<"tictactoe" | null>(
    "tictactoe"
  );

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [onClose]);

  return (
    <div className="h-full flex flex-col bg-black text-green-400 p-4 font-mono">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">🎮 Games</h2>
        <div className="text-sm">Press ESC to exit</div>
      </div>

      <div className="flex-1">
        {selectedGame === "tictactoe" && <TicTacToe onClose={onClose} />}
      </div>
    </div>
  );
};

export default Games;
