import { useState } from "react";

// function AddRemove(props){
//    return(
//      <div>
//       <img className="char-img" src={props.image} alt="profile"></img>
//       <h3 className="char-name">{props.name}</h3>
//      </div>
//    )
//  }
// TIC TAC TOE GAME
export function TicTacToe() {
  const [board, setBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const decideWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (board[a] !== null && board[a] === board[b] && board[b] === board[c]) {
        return "Winner is", board[a];
      }
    }
    return null;
  };

  const winner = decideWinner(board);

  const [isXturn, setIsXturn] = useState(true);
  const handleClick = (index) => {
    if (winner === null && board[index] === null) {
      const boardCopy = [...board];
      boardCopy[index] = isXturn ? "X" : "O";
      setBoard(boardCopy);
      setIsXturn(!isXturn);
    }
  };

  return (
    <div className="full-game">
      <h1>Tic Tac Toe</h1>
      <p>Player 1: "X" Player 2: "O"</p>
      <div className="board-container">
        {board.map((val, index) => (
          <GameBox val={val} onplayerClick={() => handleClick(index)} />
        ))}
      </div>
      {winner ? <h2>Winner is: {winner}</h2> : ""}
      <button
        onClick={() => {
          setBoard([null, null, null, null, null, null, null, null, null]);
          setIsXturn(true);
        }}
        className="restart"
      >
        Restart
      </button>
    </div>
  );
}
function GameBox({ val, onplayerClick }) {
  const styles = {
    color: val == "X" ? "Green" : "Red",
  };
  return (
    <div
      className="game-box"
      onClick={() => onplayerClick()}
      style={styles}
      className="game-box"
    >
      {val}
    </div>
  );
}
