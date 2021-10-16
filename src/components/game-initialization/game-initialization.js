export function gameInitialization() {

  const gamePage = document.createElement("section")
  gamePage.className = "game-page";

  const message = document.createElement("h2");
  message.className = "message";

  gamePage.appendChild(message);
  
  const playerBoard = document.createElement("div");
  playerBoard.className = "player-board";

  const computerBoard = document.createElement("div");
  computerBoard.className = "computer-board";

  for (let i=0; i<100; i++) {
    let playerCell = document.createElement("div");
    playerCell.className = "player-cell";
    playerBoard.appendChild(playerCell);

    let computerCell = document.createElement("div");
    computerCell.className = "computer-cell";
    computerBoard.appendChild(computerCell);
  }

  gamePage.appendChild(playerBoard);
  gamePage.appendChild(computerBoard);

  return {gamePage, message, playerBoard, computerBoard};
}
