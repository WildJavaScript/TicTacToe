let player = 1;
let gameOver = false;
let gameDraw = true;
let displayInput = function (box) {
  if (document.getElementById(box).innerText === "" && gameOver === false) {
    if (player === 1) {
      document.getElementById(box).innerText = "X";
      document.getElementById(box).style.color = "blue";
      player = 0;
    } else {
      document.getElementById(box).innerText = "0";
      document.getElementById(box).style.color = "red";
      player = 1;
    }
  }
  let b1 = document.getElementById("box1").innerText;
  let b2 = document.getElementById("box2").innerText;
  let b3 = document.getElementById("box3").innerText;
  let b4 = document.getElementById("box4").innerText;
  let b5 = document.getElementById("box5").innerText;
  let b6 = document.getElementById("box6").innerText;
  let b7 = document.getElementById("box7").innerText;
  let b8 = document.getElementById("box8").innerText;
  let b9 = document.getElementById("box9").innerText;
  if (
    (b1 === "X" && b2 === "X" && b3 === "X") ||
    (b4 === "X" && b5 === "X" && b6 === "X") ||
    (b7 === "X" && b8 === "X" && b9 === "X") ||
    (b1 === "X" && b4 === "X" && b7 === "X") ||
    (b2 === "X" && b5 === "X" && b8 === "X") ||
    (b3 === "X" && b6 === "X" && b9 === "X") ||
    (b1 === "X" && b5 === "X" && b9 === "X") ||
    (b3 === "X" && b5 === "X" && b7 === "X")
  ) {
    document.getElementById("winner-text").innerText = "X wins!";
    gameOver = true;
  } else if (
    (b1 === "0" && b2 === "0" && b3 === "0") ||
    (b4 === "0" && b5 === "0" && b6 === "0") ||
    (b7 === "0" && b8 === "0" && b9 === "0") ||
    (b1 === "0" && b4 === "0" && b7 === "0") ||
    (b2 === "0" && b5 === "0" && b8 === "0") ||
    (b3 === "0" && b6 === "0" && b9 === "0") ||
    (b1 === "0" && b5 === "0" && b9 === "0") ||
    (b3 === "0" && b5 === "0" && b7 === "0")
  ) {
    document.getElementById("winner-text").innerText = "0 wins!";
    gameOver = true;
  } else {
    gameDraw = true;
    for (i = 1; i < 10; ++i) {
      if (document.getElementById("box" + i).innerText === "") {
        gameDraw = false;
      }
    }
    if (gameDraw === true) {
      document.getElementById("winner-text").innerText = "Draw!";
      gameOver = true;
    }
  }
};
let resetGame = function () {
  for (i = 1; i < 10; ++i) {
    document.getElementById("box" + i).innerText = "";
  }
  player = 1;
  gameOver = false;
  gameDraw = true;
  document.getElementById("winner-text").innerText = "";
};
