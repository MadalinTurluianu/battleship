export class Player{
  constructor(name) {
    this.name = name;
    this.round = 1;
  }

  attack(enemyGameboard, coord) {
    enemyGameboard.receiveAttack(coord);
    this.round += 1;
  }
}