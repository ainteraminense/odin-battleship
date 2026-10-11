import "./styles.css";

const yourFleet = document.getElementById("your-fleet");
const enemyWaters = document.getElementById("enemy-waters");

function createGrid(player) {
    for (let i=0;i<10;i++) {
        for (let j=0;j<10;j++) {
            const cell = document.createElement("div");
            cell.classList.add(`cell`);
            cell.classList.add(`cell${i}${j}`);
            player.appendChild(cell);
        }
    }
}

createGrid(yourFleet);
