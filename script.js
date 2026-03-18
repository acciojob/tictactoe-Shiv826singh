//your JS code here. If required.
const submitBtn = document.getElementById("submit");
const gameDiv = document.getElementById("game");
const message = document.querySelector(".message");
const cells = document.querySelectorAll(".cell");

let player1 = "";
let player2 = "";
let currentPlayer = "";
let turn = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let gameOver = false;

// Start Game
submitBtn.onclick = () => {

  player1 = document.getElementById("player-1").value;
  player2 = document.getElementById("player-2").value;

  if (!player1 || !player2) return;

  document.getElementById("input-section").style.display = "none";
  gameDiv.style.display = "block";

  currentPlayer = player1;
  message.textContent = `${currentPlayer}, you're up`;
};

// Cell Click
cells.forEach((cell, index) => {

  cell.addEventListener("click", () => {

    if (board[index] !== "" || gameOver) return;

    board[index] = turn;
    cell.textContent = turn;

    if (checkWin()) {
      message.textContent = `${currentPlayer}, congratulations you won!`;
      gameOver = true;
      return;
    }

    // Switch Player
    if (turn === "X") {
      turn = "O";
      currentPlayer = player2;
    } else {
      turn = "X";
      currentPlayer = player1;
    }

    message.textContent = `${currentPlayer}, you're up`;
  });

});

// Win Logic
function checkWin() {

  const wins = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
  ];

  return wins.some(combo => {
    return combo.every(i => board[i] === turn);
  });
}