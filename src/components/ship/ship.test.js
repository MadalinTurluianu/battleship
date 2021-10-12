import { Ship } from "./ship";

it("create a ship object with length, hit and sunk", () => {
  expect(new Ship(4)).toEqual({length: 4, timesHit: 0, sunk: false});
})

it("hit a ship", () => {
  const ship = new Ship(2);
  ship.hit();
  expect(ship.timesHit).toBe(1);
})