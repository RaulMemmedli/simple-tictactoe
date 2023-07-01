let cells = document.querySelectorAll(".cell");
let isFirstPlayer = true;
let isFirstPlayerWinner = null;
let firstPlayer = document.getElementById("firstPlayer");
let secondPlayer = document.getElementById("secondPlayer");
let winner = document.getElementById("winnerTag");
let resetButton = document.getElementById("resetButton");
let board = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

document.querySelector("#resetButton").addEventListener("click", () => {
  console.log("clickeddd");
  cells.forEach((cell) => {
    cell.innerText = "";
  });
  winner.innerText = "";
  board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  isFirstPlayer = true;
  isFirstPlayerWinner = null;
});
cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (cell.innerText.length == 0 && isFirstPlayerWinner === null) {
      let row = cell.getAttribute("data-row") - 1;
      let col = cell.getAttribute("data-col") - 1;
      cell.innerText = isFirstPlayer ? "X" : "0";
      board[row][col] = isFirstPlayer ? "X" : "0";
      console.log(isGameOver());
      let gameOver = isGameOver();
      if (gameOver !== null) {
        isFirstPlayerWinner = gameOver;
        if (isFirstPlayerWinner) {
          firstPlayer.innerText++;
          winner.innerText = "first player won!!! congrats";
        } else {
          secondPlayer.innerText++;
          winner.innerText = "Second player won!!! congrats";
        }
      }
      isFirstPlayer = !isFirstPlayer;
    }
  });
});
function checkCases(value) {
  return [
    board[0].every((el) => el === value),
    board[1].every((el) => el === value),
    board[2].every((el) => el === value),
    [board[0][0], board[1][0], board[2][0]].every((el) => el === value),
    [board[0][1], board[1][1], board[2][1]].every((el) => el === value),
    [board[0][2], board[1][2], board[2][2]].every((el) => el === value),
    [board[0][0], board[1][1], board[2][2]].every((el) => el === value),
    [board[0][2], board[1][1], board[2][0]].every((el) => el === value),
  ].some((el) => el === true);
}
function isGameOver() {
  if (checkCases("X")) {
    return true;
  }
  if (checkCases("0")) {
    return false;
  }
  return null;
}
