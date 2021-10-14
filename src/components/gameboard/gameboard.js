import { Ship } from "../ship/ship";

export class Gameboard {
  constructor(...args) {
    this.ships = args.map(coords => new Ship(coords));
  }

  receiveAttack(coords) {
    
  }
}