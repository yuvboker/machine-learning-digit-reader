let ansCanvas;
let ctx;

function checkAnswer() {
    const prediction = predictImage();
    ansCanvas = document.getElementById("prediction");
    ctx = ansCanvas.getContext("2d");
    ctx.fillStyle = BACKGROUND_COLOR;
    ctx.font = "50px Comic Sans MS";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText(`${prediction}`,35,55);
}

function cleanAnswer(){
    ansCanvas = document.getElementById("prediction");
    ctx = ansCanvas.getContext("2d");
    ctx.fillStyle = BACKGROUND_COLOR;
    ctx.fillRect(0, 0, ansCanvas.clientWidth, ansCanvas.clientHeight);
}
