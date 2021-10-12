export class BoardCell {
  constructor() {
    this.shipOn = false;
    this.wasHit = false;
    this.div = document.createElement("div");
  }

  receiveAttack() {
    this.wasHit = true;
  }
}