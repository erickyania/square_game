import { useState, useSyncExternalStore } from "react";
import Board from "../App";

const Game = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares) {
    setHistory(...history, nextSquares);
    setXIsNext(!xIsNext);
  }
  return (
    <div className="game">
      <div className="game-board">
        <Board
          xIsNext={isFinite}
          squares={currentSquares}
          onplay={handlePlay}
        ></Board>
      </div>
      <div className="game-info">
        <ol>{}</ol>
      </div>
    </div>
  );
};
export default Game;
