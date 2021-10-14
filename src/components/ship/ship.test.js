import { Ship } from "./ship";

it("create a ship with the chosen length", () => {
  expect(new Ship([8,9,10,11]).length).toBe(4);
  expect(new Ship([2,3]).length).toBe(2);
})

it("create a ship with the chosen position", () => {
  expect(new Ship([2,3,4]).positions).toEqual([2,3,4]);
  expect(new Ship([8,9,10]).positions).toEqual([8,9,10]);
})

it("hit the ship and check if was sunk", () => {
  const ship = new Ship([3]);
  ship.hit(3);

  expect(ship.timesHit).toBe(1);
  expect(ship.sunk).toBe(true);
})

