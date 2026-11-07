export class Ship {
  constructor(length, name) {
    this.shipLength = length;
    this.hits = 0;
    this.isSunk = false;
    this.name = name;
  }

  hit() {
    return ++this.hits;
  }

  checkIsSunk() {
    return this.shipLength <= this.hits ? true : false;
  }
}
