var board = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "]
];

var turn = "X";
var gameOver = false;

function ticTacToe(row, col) {
  if (!gameOver && board[row][col] === " ") {
    board[row][col] = turn;
    updateBoard(row, col);
    checkWinner(row, col);
    changeTurn();
  }
}

function updateBoard(row, col) {
  var cell = document.getElementById("board").rows[row].cells[col];
  cell.textContent = board[row][col];
}

function checkWinner(row, col) {
  if (
    checkRow(row) ||
    checkColumn(col) ||
    checkDiagonal(row, col) ||
    checkReverseDiagonal(row, col)
  ) {
    alert("Player " + turn + " wins!");
    gameOver = true;
  } else if (checkDraw()) {
    alert("It's a draw!");
    gameOver = true;
  }
}

function checkRow(row) {
  return (
    board[row][0] === turn &&
    board[row][1] === turn &&
    board[row][2] === turn
  );
}

function checkColumn(col) {
  return (
    board[0][col] === turn &&
    board[1][col] === turn &&
    board[2][col] === turn
  );
}

function checkDiagonal(row, col) {
  if (row !== col) {
    return false;
  }
  return board[0][0] === turn && board[1][1] === turn && board[2][2] === turn;
}

function checkReverseDiagonal(row, col) {
  if (row + col !== 2) {
    return false;
  }
  return board[0][2] === turn && board[1][1] === turn && board[2][0] === turn;
}

function checkDraw() {
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (board[i][j] === " ") {
        return false;
      }
    }
  }
  return true;
}

function changeTurn() {
  turn = turn === "X" ? "O" : "X";
}
