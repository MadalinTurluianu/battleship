import { Gameboard } from "./gameboard";

it("should be able to place ships at specific coordinates", () => {
  expect(new Gameboard([1, 2, 3], [4, 5, 6, 7]).ships[1].positions).toEqual([
    4, 5, 6, 7,
  ]);
  expect(new Gameboard([1, 2, 3], [4, 5, 6, 7]).ships[0].positions).toEqual([
    1, 2, 3,
  ]);
});

it("should receive an attack and see if it's water or a ship was hit", () => {
  const board = new Gameboard([1, 2, 3], [4, 5, 6]);

  board.receiveAttack(1);

  expect(board.ships[0].timesHit).toBe(1);

  expect(board.receiveAttack(2)).toBe("hit");
  expect(board.receiveAttack(8)).toBe("water");

  board.receiveAttack(4);
  board.receiveAttack(5);
  board.receiveAttack(6);

  expect(board.ships[1].sunk).toBe(true);

  expect(board.receiveAttack(3)).toBe("all ships sunk");
});
