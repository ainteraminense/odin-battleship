//import { test } from "media-typer";
import {Ship} from "./ship.js"

test('increase hit by one', () => {
    const ship = new Ship(3);
    expect(ship.hit()).toBe(1);
});

test('check ship is sunk', () => {
    const ship = new Ship(3);
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.checkIsSunk()).toBe(true);
});

test('check ship is not sunk', () => {
    const ship = new Ship(3);
    ship.hit();
    ship.hit();
    expect(ship.checkIsSunk()).toBe(false);
})