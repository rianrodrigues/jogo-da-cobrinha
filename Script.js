let canvas = document.getElementById("Snake");
let context = canvas.getContext("2d");
let box = 32;

function criarBG() {
    context.fillstyle = "lightgreen";
    context.fillrect(0, 0, 16 * box, 16 * box);
}

criarBG();
