const BACKGROUND_COLOR = '#000000';
const LINE_COLOR = '#FFFFFF';
const LINE_WIDHT = 15;
let currentX = 0;
let currentY = 0;
let previousX = 0;
let previousY = 0;

let canvas;
let context;

function prepareCanvas(){
  canvas = document.getElementById("my-canvas");
  context = canvas.getContext('2d');
  context.strokeStyle = LINE_COLOR;
  context.lineWidth = LINE_WIDHT;
  context.fillStyle = BACKGROUND_COLOR;
  context.lineJoin = 'round';

  let isPainting = false;

  context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

  document.addEventListener('mousedown', function (event) {
      isPainting = true;
      currentX = event.clientX - canvas.offsetLeft;
      currentY = event.clientY - canvas.offsetTop;
  });
  document.addEventListener('mousemove', function (event) {
      if (isPainting){
          previousX = currentX;
          currentX = event.clientX - canvas.offsetLeft;

          previousY = currentY;
          currentY = event.clientY - canvas.offsetTop;

          draw();
      }
  });
    document.addEventListener('mouseup', function (event) {
      isPainting = false;
  });

  canvas.addEventListener('mouseleave', function (event){
    isPainting = false;
  });

  document.addEventListener('touchmove', function (event) {
      if (isPainting){
          previousX = currentX;
          currentX = event.touches[0].clientX - canvas.offsetLeft;

          previousY = currentY;
          currentY = event.touches[0].clientY - canvas.offsetTop;

          draw();
      }
  });


  canvas.addEventListener('touchstart', function (event) {
      isPainting = true;
      currentX = event.touches[0].clientX - canvas.offsetLeft;
      currentY = event.touches[0].clientY - canvas.offsetTop;
  });

  canvas.addEventListener('touchend', function (event){
    isPainting = false;
  });

  canvas.addEventListener('touchcancel', function (event){
    isPainting = false;
  });


  // document.addEventListener('pointermove', function (event) {
  //     if (isPainting){
  //         previousX = currentX;
  //         currentX = event.clientX - canvas.offsetLeft;
  //
  //         previousY = currentY;
  //         currentY = event.clientY - canvas.offsetTop;
  //
  //         draw();
  //
  //     }
  // });
  // canvas.addEventListener('pointerdown', function (event) {
  //     isPainting = true;
  //     currentX = event.clientX - canvas.offsetLeft;
  //     currentY = event.clientY - canvas.offsetTop;
  // });
  //
  // canvas.addEventListener('pointerup', function (event){
  //   isPainting = false;
  // });
  //
  // canvas.addEventListener('pointerleave', function (event){
  //   isPainting = false;
  // });


}
function clearCanvas(){
  currentX = 0;
  currentY = 0;
  previousX = 0;
  previousY = 0;
  context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
}


function draw(){
      context.beginPath();
      context.moveTo(previousX, previousY);
      context.lineTo(currentX, currentY);
      context.closePath();
      context.stroke();
}
