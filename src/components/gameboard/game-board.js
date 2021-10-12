import { Ship } from "../ship/ship";
import { BoardCell } from "./board-cell";

export function gameBoard() {
  const board = {
    ships: 4,
    div: document.createElement("div"),
    cells: [],
  };

  for (let i = 0; i < 100; i++) {
    board.cells.push(new BoardCell());
  }

  return board;
}
