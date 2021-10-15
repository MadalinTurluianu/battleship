import { Player } from "./player";
import { Gameboard } from "../gameboard/gameboard";

it("should take turns attacking the enemy gameboard", () => {
  const enemyGameboard = new Gameboard([1,2,3,4]);
  const player = new Player;
  player.attack(enemyGameboard, 1);

  expect(player.round).toBe(2);
  expect(enemyGameboard.ships[0].timesHit).toBe(1);

  player.attack(enemyGameboard, 2);

  expect(player.round).toBe(3);
  expect(enemyGameboard.ships[0].timesHit).toBe(2);

  player.attack(enemyGameboard,3);

  expect(player.round).toBe(4);
  expect(enemyGameboard.ships[0].timesHit).toBe(3);

  player.attack(enemyGameboard, 4);

  expect(player.round).toBe(5);
  expect(enemyGameboard.ships[0].timesHit).toBe(4);
  expect(enemyGameboard.ships[0].sunk).toBe(true);
})