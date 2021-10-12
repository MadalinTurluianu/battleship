export function Ship(length) {
  this.length = length;
  this.timesHit = 0;
  this.sunk = false;

  this.__proto__.hit = () => {
    this.timesHit += 1;
  }
};