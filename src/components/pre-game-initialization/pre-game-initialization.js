export function preGameInitialization() {

  const section = document.createElement("section")
  section.className = "pre-game-page";

  const h2 = document.createElement("h2");
  h2.textContent = "Welcome, please enter your name:"
  section.appendChild(h2);

  const input = document.createElement("input");
  input.type = "text";
  section.appendChild(input);

  const button = document.createElement("button");
  button.textContent = "Submit";
  section.appendChild(button);

  const playerBoard = document.createElement("div");
  playerBoard.className = "player-board board";

  for (let i=0; i<100; i++) {
    let playerCell = document.createElement("div");
    playerCell.className = "player-cell";
    playerBoard.appendChild(playerCell);
  }

  section.appendChild(playerBoard);

  return {section, h2, playerBoard, button, input};
}
