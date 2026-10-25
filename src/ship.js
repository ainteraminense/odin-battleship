export class Ship {
    constructor(length) {
        this.shipLength = length;
        this.hits = 0;
        this.isSunk = false;
    }

    hit() {
        return ++this.hits;
    }

    checkIsSunk() {
        return this.shipLength <= this.hits ? true : false;
    }
}