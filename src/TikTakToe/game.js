
import React,{ useState } from "react";
import './game.css'


export default function TikTakToe() {
  const [user, setUser] = useState("X");
  const [winner, setWinner] = useState();
  const [cell, setCell] = useState(Array(9).fill(""));
  function Cell({ num }) {
    return (
      <td
        onClick={() => {
          handleClick(num);
        }}
      >
        {cell[num]}
      </td>
    );
  }
  function Winner(squares) {
    const combos = {
      acrros: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8]
      ],
      columes: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8]
      ],
      diagonal: [
        [0, 4, 8],
        [2, 4, 6]
      ]
    };
    for (let combo in combos) {
      combos[combo].forEach((pattern) => {
        if (
          squares[pattern[0]] === "" ||
          squares[pattern[1]] === "" ||
          squares[pattern[2]] === ""
        ) {
        } else if (
          squares[pattern[0]] === squares[pattern[1]] &&
          squares[pattern[1]] === squares[pattern[2]]
        ) {
          setWinner(squares[pattern[0]]);
          return 1;
        }
      });
    }
  }
  function handleClick(num) {
    if (cell[num] !== "") {
      alert("This cell is already clicked!");
      return;
    }
    const squares = [...cell];
    if (user === "X") {
      squares[num] = "X";
      setUser("O");
    } else {
      squares[num] = "O";
      setUser("X");
    }
    Winner(squares);
    setCell(squares);
  }
  return (
    <div className="App">
      Turn:{user}
      <table>
        <tbody>
          <tr>
            <Cell num={0} />
            <Cell num={1} />
            <Cell num={2} />
          </tr>
          <tr>
            <Cell num={3} />
            <Cell num={4} />
            <Cell num={5} />
          </tr>
          <tr>
            <Cell num={6} />
            <Cell num={7} />
            <Cell num={8} />
          </tr>
        </tbody>
      </table>
      {winner && (
        <>
          {winner}
          <span>is winner</span>
        </>
      )}
    </div>
  );
}
