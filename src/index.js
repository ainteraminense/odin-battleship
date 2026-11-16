import "./styles.css";
import { BattleShip } from "./battleShip.js";

const yourFleet = document.getElementById("your-fleet");
const enemyWaters = document.getElementById("enemy-waters");
const GRID_SIZE = 10;

const game = new BattleShip();
game.initiateGame();

function createGrid(playerUI, humanPlayer) {
  for (let i = 0; i < GRID_SIZE; i++) {
    for (let j = 0; j < GRID_SIZE; j++) {
      const cell = document.createElement("div");
      cell.classList.add(`cell`);

      if (humanPlayer) {
        let cellData = game.playerBoard.gameboard[i][j];
        if (
          cellData != null && // equality operator checks `undefined` and `null`
          typeof cellData === "object"
        ) {
          cell.classList.add("marked-cell");
        }
        playerUI.appendChild(cell);
      } else {
        let cellData = game.enemyBoard.gameboard[i][j];
        cell.addEventListener("click", () => {
          console.log(cellData);
        });
        enemyWaters.appendChild(cell);
      }
    }
  }
}

createGrid(yourFleet, true);
createGrid(enemyWaters, false);
