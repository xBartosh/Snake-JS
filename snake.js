import {
    whereToMove
} from "./input.js"
import {
    MIN,
    GRID_SIZE
} from "./apple.js"



class Snake {
    constructor() {
        this.snakeBody = [{
            x: 11,
            y: 11
        }]
    }
}

let snake = new Snake();
let expand = 0;

export function update() {
    addElements();
    const move = whereToMove();
    for (let i = snake.snakeBody.length - 2; i >= 0; i--) {
        snake.snakeBody[i + 1] = {
            ...snake.snakeBody[i]
        };
    }

    snake.snakeBody[0].x += move.x;
    snake.snakeBody[0].y += move.y;
}

export function draw(gameBoard) {
    snake.snakeBody.forEach(element => {
        const snakeEl = document.createElement("div");
        snakeEl.style.gridRowStart = element.y;
        snakeEl.style.gridColumnStart = element.x;
        snakeEl.classList.add("snake");
        gameBoard.appendChild(snakeEl);
    })
}

export function expandSnake(howMany) {
    expand += howMany;
}

export function isColliding(apple, {
    ignoreHead = false
} = {}) {
    return snake.snakeBody.some((el, index) => {
        if (ignoreHead && index === 0) return false;
        return equalPositions(el, apple);
    });
}

function equalPositions(snake, apple) {
    return snake.x === apple.x && snake.y === apple.y;
}

function addElements() {
    for (let i = 0; i < expand; i++) {
        snake.snakeBody.push({
            ...snake.snakeBody[snake.snakeBody.length - 1]
        });
    }

    expand = 0;
}

function getHeadOfSnake() {
    return snake.snakeBody[0];
}

export function isSnakeColliding() {
    return isColliding(snake.snakeBody[0], {
        ignoreHead: true
    });
}

export function isSnakeOutOfBounds() {
    return snake.snakeBody[0].x < MIN || snake.snakeBody[0].x > GRID_SIZE ||
        snake.snakeBody[0].y < MIN || snake.snakeBody[0].y > GRID_SIZE;
}