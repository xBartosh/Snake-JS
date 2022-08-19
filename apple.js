import {
    isColliding,
    expandSnake
} from "./snake.js";

export const MIN = 1;
export const GRID_SIZE = 21;
const SNAKE_EXPAND = 1;
let level = 1;
export let points = 0;
let scoreboard = document.getElementById("scoreboard");

class Apple {
    constructor() {
        this.x = 5;
        this.y = 5;
    }
}

let apple = new Apple();

export function update() {
    if (isColliding(apple)) {
        expandSnake(SNAKE_EXPAND);
        randomPosition();
        addPoints();
    }
}

export function draw(gameBoard) {
    const ap = document.createElement("div");
    ap.style.gridRowStart = apple.y;
    ap.style.gridColumnStart = apple.x;
    ap.classList.add("apple");
    gameBoard.appendChild(ap);
}

function randomPosition() {
    let newX = Math.floor(Math.random() * GRID_SIZE) + MIN;
    let newY = Math.floor(Math.random() * GRID_SIZE) + MIN;
    let point = {
        x: newX,
        y: newY
    };
    while (isColliding(point)) {
        randomPosition();
    }

    apple.x = newX;
    apple.y = newY;
}

function addPoints() {
    points += level;
    scoreboard.innerHTML = "Points: " + points;
}