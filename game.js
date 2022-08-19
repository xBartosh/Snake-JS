import {
    update as updateSnake,
    draw as drawSnake,
    isSnakeColliding,
    isSnakeOutOfBounds
} from "./snake.js";

import {
    update as updateApple,
    draw as drawApple,
    points
} from "./apple.js";



const SNAKE_SPEED = 8;
let lastRenderedTime = 0;
let gameBoard = document.getElementById("game-board");
let gameOver = false;

function game(curTime) {
    console.log(isSnakeColliding);
    if (gameOver) {
        if (confirm('You scored: ' + points + ' points\nPress ok to restart.')) {
            window.location = '/game.html';
        }
        return;
    }
    window.requestAnimationFrame(game);
    const timeRednered = (curTime - lastRenderedTime) / 1000;
    if (timeRednered < 1 / SNAKE_SPEED)
        return;

    lastRenderedTime = curTime;
    update();
    draw();
    isGameOver();
}

window.requestAnimationFrame(game);

function update() {
    updateSnake();
    updateApple();
}

function draw() {
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    drawApple(gameBoard);
}

function isGameOver() {
    gameOver = isSnakeColliding() || isSnakeOutOfBounds();
}