export class Ship {
  constructor(length) {
    this.length = length;
    this.timesHit = 0;
    this.sunk = false;
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
