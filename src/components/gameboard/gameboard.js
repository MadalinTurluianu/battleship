import { Ship } from "../ship/ship";

export class Gameboard {
  constructor(...args) {
    this.ships = args.map((coords) => new Ship(coords));
  }

  checkAllShipsSunk() {
    const sunkShips = this.ships.filter((ship) => ship.sunk === true);

    if (sunkShips.length === this.ships.length) {
      return true;
    }else {
      return false;
    }
  }

  receiveAttack(coord) {
    const attackedShip = this.ships.filter((ship) =>
      ship.positions.includes(coord)
    );

    if (attackedShip.length === 1) {
      attackedShip[0].hit();
      return (this.checkAllShipsSunk() ? "all ships sunk" : "hit")
    } else {
      return "water";
    }
  }
}
