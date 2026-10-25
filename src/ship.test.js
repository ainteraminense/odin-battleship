import {Ship} from "./ship.js"

test('increase hit by one', () => {
    const ship = new Ship(3);
    expect(ship.hit()).toBe(1);
});