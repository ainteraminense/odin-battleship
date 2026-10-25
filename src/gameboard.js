import { Ship } from "./ship"

export class Gameboard {
    constructor() {
        this.GRID_SIZE =10;
        this.gameboard = []
    };

    createBoard() {
        for (let i=0;i<this.GRID_SIZE;i++) {
            this.gameboard.push(new Array(10));
        }
    };

    placeShip(ship, coordinateX, coordinateY, isVertical) {
        if (isVertical) {
            for (let i=coordinateX; i < coordinateX + ship.shipLength; i++) {
                this.gameboard[i][coordinateY] = ship;
            }
        } else {
            for (let j=coordinateY; j < coordinateY + ship.shipLength; j++) {
                this.gameboard[coordinateX][j] = ship;
            }
        }
    };
}