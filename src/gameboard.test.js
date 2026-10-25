import { Gameboard } from "./gameboard";
import { Ship } from "./ship";

test('Exist in the gameboard', () => {
    const board = new Gameboard();
    board.createBoard();
    const ship = new Ship(3);
    board.placeShip(ship,0,0,true);
    expect(board.gameboard[0][0] === ship).toEqual(true);
});

test('Also exist in the gameboard', () => {
    const board = new Gameboard();
    board.createBoard();
    const ship = new Ship(3);
    board.placeShip(ship,0,0,true);
    expect(board.gameboard[1][0] === ship).toEqual(true);
});

test('dont exist in gameboard', () => {
    const board = new Gameboard();
    board.createBoard();
    const ship = new Ship(3);
    board.placeShip(ship,0,0,true);
    expect(board.gameboard[3][0] === ship).toEqual(false);
});