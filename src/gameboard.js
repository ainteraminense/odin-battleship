import { Ship } from "./ship";

export class Gameboard {
  constructor() {
    this.GRID_SIZE = 10;
    this.gameboard = [];
    this.missedShotsLogs = [];
  }

  createBoard() {
    for (let i = 0; i < this.GRID_SIZE; i++) {
      this.gameboard.push(new Array(10));
    }
  }

  placeShip(ship, coordinateX, coordinateY, isVertical) {
    if (isVertical) {
      for (let i = coordinateX; i < coordinateX + ship.shipLength; i++) {
        this.gameboard[i][coordinateY] = ship;
      }
    } else {
      for (let j = coordinateY; j < coordinateY + ship.shipLength; j++) {
        this.gameboard[coordinateX][j] = ship;
      }
    }
  }

  receiveAttack(coordinateX, coordinateY) {
    const value = this.gameboard[coordinateX][coordinateY];
    if (
      value != null && // equality operator checks `undefined` and `null`
      typeof value === "object"
    ) {
      this.gameboard[coordinateX][coordinateY].hit();
      return true;
    } else {
      this.missedShotsLogs.push({
        coordinateX: coordinateX,
        coordinateY: coordinateY,
      });
      return false;
    }
  }
}
