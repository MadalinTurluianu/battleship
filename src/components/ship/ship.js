export class Ship {
  constructor(length, positions = []) {
    this.length = length;
    this.timesHit = 0;
    this.sunk = false;
    this.positions = positions;
  }

  isSunk() {
    if (this.timesHit === this.length) {
      this.sunk = true;
    }
  }

  hit(position) {
    if (this.positions.includes(position)) {
      this.timesHit += 1;

      this.isSunk();
    }
  }
}