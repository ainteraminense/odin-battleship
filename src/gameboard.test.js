import { Gameboard } from "./gameboard";
import { Ship } from "./ship";

test("Exist in the gameboard", () => {
  const board = new Gameboard();
  board.createBoard();
  const ship = new Ship(3);
  board.placeShip(ship, 0, 0, true);
  expect(board.gameboard[0][0] === ship).toEqual(true);
});

test("Also exist in the gameboard", () => {
  const board = new Gameboard();
  board.createBoard();
  const ship = new Ship(3);
  board.placeShip(ship, 0, 0, true);
  expect(board.gameboard[1][0] === ship).toEqual(true);
});

test("dont exist in gameboard", () => {
  const board = new Gameboard();
  board.createBoard();
  const ship = new Ship(3);
  board.placeShip(ship, 0, 0, true);
  expect(board.gameboard[3][0] === ship).toEqual(false);
});

test("Hit a ship", () => {
  const board = new Gameboard();
  board.createBoard();
  const ship = new Ship(3);
  board.placeShip(ship, 0, 0, true);
  expect(board.receiveAttack(0, 0)).toEqual(true);
});

test("Hit a ship", () => {
  const board = new Gameboard();
  board.createBoard();
  const ship = new Ship(3);
  board.placeShip(ship, 0, 0, true);
  expect(board.receiveAttack(1, 0)).toEqual(true);
});

test("Miss a ship", () => {
  const board = new Gameboard();
  board.createBoard();
  const ship = new Ship(3);
  board.placeShip(ship, 0, 0, true);
  expect(board.receiveAttack(0, 3)).toEqual(false);
});

test("All ships have been sunk with 1 ship", () => {
  const board = new Gameboard();
  board.createBoard();
  const ship = new Ship(3);
  board.placeShip(ship, 0, 0, true);
  board.receiveAttack(0, 0);
  board.receiveAttack(1, 0);
  board.receiveAttack(2, 0);
  expect(board.reportAllShipsHaveBeenSunk()).toEqual(true);
});

test("Not All ships have been sunk with 1 ship", () => {
  const board = new Gameboard();
  board.createBoard();
  const ship = new Ship(3);
  board.placeShip(ship, 0, 0, true);
  board.receiveAttack(0, 0);
  board.receiveAttack(1, 0);
  board.receiveAttack(3, 0);
  expect(board.reportAllShipsHaveBeenSunk()).toEqual(false);
});

test("All ships have been sunk with 2 ship", () => {
  const board = new Gameboard();
  board.createBoard();
  const ship = new Ship(3);
  const ship2 = new Ship(3);
  board.placeShip(ship, 0, 0, true);
  board.placeShip(ship2, 5, 5, true);
  board.receiveAttack(0, 0);
  board.receiveAttack(1, 0);
  board.receiveAttack(2, 0);
  board.receiveAttack(5, 5);
  board.receiveAttack(6, 5);
  board.receiveAttack(7, 5);
  expect(board.reportAllShipsHaveBeenSunk()).toEqual(true);
});

test("Not all ships have been sunk with 2 ship", () => {
  const board = new Gameboard();
  board.createBoard();
  const ship = new Ship(3);
  const ship2 = new Ship(3);
  board.placeShip(ship, 0, 0, true);
  board.placeShip(ship2, 5, 5, true);
  board.receiveAttack(0, 0);
  board.receiveAttack(1, 0);
  board.receiveAttack(2, 0);
  board.receiveAttack(5, 5);
  board.receiveAttack(6, 5);
  board.receiveAttack(9, 5);
  expect(board.reportAllShipsHaveBeenSunk()).toEqual(false);
});
