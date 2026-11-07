import { Ship } from "./ship.js";
import { Gameboard } from "./gameboard.js";

export class BattleShip {
  constructor() {
    this.playerBoard = new Gameboard();
    this.enemyBoard = new Gameboard();
  }
  initiateGame() {
    const carrier = new Ship(5, "carrier");
    const battleShip1 = new Ship(4, "Battleship");
    const battleShip2 = new Ship(4, "Battleship");
    const cruiser1 = new Ship(3, "cruiser");
    const cruiser2 = new Ship(3, "cruiser");
    const cruiser3 = new Ship(3, "cruiser");
    const submarine1 = new Ship(3, "submarine");
    const submarine2 = new Ship(3, "submarine");
    const submarine3 = new Ship(3, "submarine");
    const submarine4 = new Ship(3, "submarine");
    const destroyer1 = new Ship(2, "destroyer");
    const destroyer2 = new Ship(2, "destroyer");
    const destroyer3 = new Ship(2, "destroyer");
    const destroyer4 = new Ship(2, "destroyer");
    const destroyer5 = new Ship(2, "destroyer");

    this.playerBoard.createBoard();
    this.playerBoard.placeShip(carrier, 0, 0);
    this.playerBoard.placeShip(battleShip1, 0, 1, false);
    this.playerBoard.placeShip(battleShip2, 1, 3, false);
    this.playerBoard.placeShip(cruiser1, 0, 9);
    this.playerBoard.placeShip(cruiser2, 3, 9);
    this.playerBoard.placeShip(cruiser3, 5, 0, false);
    this.playerBoard.placeShip(submarine1, 6, 0, false);
    this.playerBoard.placeShip(submarine2, 6, 5, false);
    this.playerBoard.placeShip(submarine3, 7, 0);
    this.playerBoard.placeShip(submarine4, 7, 3);
    this.playerBoard.placeShip(destroyer1, 7, 6);
    this.playerBoard.placeShip(destroyer2, 7, 8);
    this.playerBoard.placeShip(destroyer3, 7, 9);
    this.playerBoard.placeShip(destroyer4, 3, 2, false);
    this.playerBoard.placeShip(destroyer5, 4, 2, false);

    const player2carrier = new Ship(5, "carrier");
    const player2battleShip1 = new Ship(4, "battleship");
    const player2battleShip2 = new Ship(4, "battleship");
    const player2cruiser1 = new Ship(3, "cruiser");
    const player2cruiser2 = new Ship(3, "cruiser");
    const player2cruiser3 = new Ship(3, "cruiser");
    const player2submarine1 = new Ship(3, "submarine");
    const player2submarine2 = new Ship(3, "submarine");
    const player2submarine3 = new Ship(3, "submarine");
    const player2submarine4 = new Ship(3, "submarine");
    const player2destroyer1 = new Ship(2, "destroyer");
    const player2destroyer2 = new Ship(2, "destroyer");
    const player2destroyer3 = new Ship(2, "destroyer");
    const player2destroyer4 = new Ship(2, "destroyer");
    const player2destroyer5 = new Ship(2, "destroyer");

    this.enemyBoard.createBoard();
    this.enemyBoard.placeShip(player2carrier, 0, 0);
    this.enemyBoard.placeShip(player2battleShip1, 0, 1, false);
    this.enemyBoard.placeShip(player2battleShip2, 1, 3, false);
    this.enemyBoard.placeShip(player2cruiser1, 0, 9);
    this.enemyBoard.placeShip(player2cruiser2, 3, 9);
    this.enemyBoard.placeShip(player2cruiser3, 5, 0, false);
    this.enemyBoard.placeShip(player2submarine1, 6, 0, false);
    this.enemyBoard.placeShip(player2submarine2, 6, 5, false);
    this.enemyBoard.placeShip(player2submarine3, 7, 0);
    this.enemyBoard.placeShip(player2submarine4, 7, 3);
    this.enemyBoard.placeShip(player2destroyer1, 7, 6);
    this.enemyBoard.placeShip(player2destroyer2, 7, 8);
    this.enemyBoard.placeShip(player2destroyer3, 7, 9);
    this.enemyBoard.placeShip(player2destroyer4, 3, 2, false);
    this.enemyBoard.placeShip(player2destroyer5, 4, 2, false);
  }
}
