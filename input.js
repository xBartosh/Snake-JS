let movement = {
    x: 0,
    y: 0
};
let lastMove = {
    x: 0,
    y: 0
}

window.addEventListener("keydown", event => whichKey(event));


function whichKey(event) {
    switch (event.key) {
        case "ArrowUp":
            if (lastMove.y !== 0) break;
            movement = {
                x: 0,
                y: -1
            };
            break;
        case "ArrowDown":
            if (lastMove.y !== 0) break;
            movement = {
                x: 0,
                y: 1
            };
            break;
        case "ArrowRight":
            if (lastMove.x !== 0) break;
            movement = {
                x: 1,
                y: 0
            };
            break;
        case "ArrowLeft":
            if (lastMove.x !== 0) break;
            movement = {
                x: -1,
                y: 0
            };
            break;
    }
}

export function whereToMove() {
    lastMove = movement;
    return movement;
}