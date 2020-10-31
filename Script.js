let canvas = document.getElementById("Snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x : 8 * box,
    y : 8 * box
}

function criarBG() {
    context.fillstyle = "lightgreen";
    context.fillrect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha() {
    for(i=0; i < snake.length; i++){
    context.fillstyle = "green";
    context.fillrect(snake[i].x, snake[i].y, box, box);
    }
}

criarBG();
criarCobrinha();
