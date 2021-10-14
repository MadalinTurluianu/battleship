export class Ship {
  constructor(positions = []) {
    this.length = positions.length;
    this.timesHit = 0;
    this.sunk = false;
    this.positions = positions;
  }

  isSunk() {
    if (this.timesHit === this.length) {
      this.sunk = true;
    }
  }

  hit() {
    this.timesHit += 1;
    this.isSunk();
  }
}
