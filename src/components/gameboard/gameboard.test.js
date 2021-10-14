import { Gameboard } from "./gameboard";

it("should be able to place ships at specific coordinates", () => {
  expect(new Gameboard([1, 2, 3], [4, 5, 6, 7]).ships[1].positions).toEqual([
    4, 5, 6, 7,
  ]);
  expect(new Gameboard([1, 2, 3], [4, 5, 6, 7]).ships[0].positions).toEqual([
    1, 2, 3,
  ]);
});
