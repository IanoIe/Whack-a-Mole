
let currMoleTile;
let currPlantTile;
let score = 0;
let gameOver = false;


window.onload = function() {
    setGame();
}

function setGame() {
    // Configurar a grelha de jogo em html
    for (let i = 0; i < 9; i++) {
        //<div id="0-8"></div>
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }

    setInterval(setMole, 1000); // intervalo para prenchimento da telinha do jogo - toupeira
    setInterval(setPlant, 2000); // intervalo para preenchiemnto de tela de jogo - planta-piranha
}


function getRandomTile() {
    //Math.random --> (0-1) * 9 = (0-9)
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}


function setMole() {
    if (gameOver) {
        return;
    }
    // Só mete boneco na coluna vazia
    if (currMoleTile) {
        currMoleTile.innerHTML = "";
    }

    let mole = document.createElement("img");
    mole.src = "../images/monty-mole.png";

    let num = getRandomTile();

    if (currPlantTile && currPlantTile == num) {
        return;
    }
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);

}

function setPlant() {
    if (gameOver) {
        return;
    }

    if (currPlantTile) {
        currPlantTile.innerHTML = "";
    }

    let plant = document.createElement("img");
    plant.src = "../images/piranha-plant.png";

    let num = getRandomTile();
    if (currMoleTile && currMoleTile.id == num) {
        return;
    }
    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(plant);
}

function selectTile() {
    if (gameOver) {
        return;
    }

    if (this == currMoleTile) {
        score += 10;
        document.getElementById("score").innerHTML = score.toString(); // Atualização de SCORE
    }
    else if (this == currPlantTile) {
        document.getElementById("score").innerHTML = "GAME OVER: "+score.toString();
        gameOver = true;
    }
}