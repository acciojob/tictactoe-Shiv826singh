const submitBtn = document.getElementById("submit");
const message = document.querySelector(".message");
const boardDiv = document.getElementById("board");
const cells = document.querySelectorAll(".cell");

let player1 = "";
let player2 = "";
let currentPlayer = "";
let turn = "x";
let board = ["", "", "", "", "", "", "", "", ""];
let gameOver = false;

// Start Game
submitBtn.onclick = () => {

  player1 = document.getElementById("player1").value;
  player2 = document.getElementById("player2").value;

  if (!player1 || !player2) return;

  boardDiv.style.display = "grid";

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

    // Switch turn
    if (turn === "x") {
      turn = "o";
      currentPlayer = player2;
    } else {
      turn = "x";
      currentPlayer = player1;
    }

    message.textContent = `${currentPlayer}, you're up`;
  });

});

// Win Logic
function checkWin() {

  const wins = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];

  return wins.some(combo => combo.every(i => board[i] === turn));
}