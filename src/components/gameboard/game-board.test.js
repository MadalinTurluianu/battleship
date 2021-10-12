import { gameBoard } from "./game-board";

it("should check if there are any ship left", () => {
  const board = gameBoard();

  expect(board.ships).toBe(4);
});
