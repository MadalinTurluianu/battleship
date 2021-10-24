import { Gameboard } from "../../components/gameboard/gameboard";

export function createGameboardPage() {
  const page = document.createElement("section");
  page.className = "create-gameboard-page";

  const emptyBoard = document.createElement("div");
  emptyBoard.className = "player-board";

  const confirmBtn = document.createElement("button");
  confirmBtn.textContent = "Confirm";
  confirmBtn.className = "confirm-btn";


  for (let i = 0; i < 100; i++) {
    let playerCell = document.createElement("div");
    playerCell.className = "player-cell";
    emptyBoard.appendChild(playerCell);
  }

  const cells = [...emptyBoard.children];
  const boats = [5, 4, 3, 3, 2];
  const coords = [];
  const allCoords = [];
  let playerGameboard;

  for (let cell of cells) {
    cell.addEventListener("click", function () {
      let i = cells.indexOf(cell);
      if (
        i <= 10 - boats[0] ||
        (i >= 10 && i < 20 - boats[0]) ||
        (i >= 20 && i < 30 - boats[0]) ||
        (i >= 30 && i < 40 - boats[0]) ||
        (i >= 40 && i < 50 - boats[0]) ||
        (i >= 50 && i < 60 - boats[0]) ||
        (i >= 60 && i < 70 - boats[0]) ||
        (i >= 70 && i < 80 - boats[0]) ||
        (i >= 80 && i < 90 - boats[0]) ||
        (i >= 90 && i < 100 - boats[0])
      ) {
        
        let boatLength = boats[0];
        let coord = [];
        let validPosition = true;

        for (let n = 0; n < boatLength; n++) {
          coord.push(i + n);
        }

        for (let c of coord) {
          if (allCoords.includes(c)){
            validPosition = false;
          }
        }

        if (validPosition) {
          for (let index of coord) {
            cells[index].style.backgroundColor = "pink";
          }
          boats.shift();
          allCoords.push(...coord);
          coords.push(coord);
        }

        if (boats.length === 0) {
          playerGameboard = new Gameboard(coords);
          console.log(playerGameboard);
        }
      }
    });
  }

  page.appendChild(emptyBoard);
  page.appendChild(confirmBtn);

  return { page, confirmBtn, boats, playerGameboard };
}
