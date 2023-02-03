
/*

let x = 0;
let y = 0;
let dx = 3;
let dy = 4;
  */
const table = document.querySelector('.table');
const plate = document.querySelector('.plate');
const ball = document.querySelector('.ball');
let point = document.getElementsByClassName('.score');


let xV = 6;
let yV = 6;

function updateBallPosition() {
  let x = parseInt(ball.style.left) || 0;
  let y = parseInt(ball.style.top) || 0;

  x += xV;
  y += yV;

  ball.style.left = x + 'px';
  ball.style.top = y + 'px';

  // Detect collision with box
  let ballLeft = x;
  let ballRight = x + ball.offsetWidth;
  let ballTop = y;
  let ballBottom = y + ball.offsetHeight;

  let plateLeft = parseInt(plate.style.left) || 0;
  let plateRight = plateLeft + plate.offsetWidth;
  let plateTop = parseInt(plate.style.top) || 0;
  let plateBottom = plateTop + plate.offsetHeight;

  if (ballRight > plateLeft && ballLeft < plateRight && ballBottom > plateTop && ballTop < plateBottom) {
    yV = -yV;
    
  }

  document.addEventListener('mousemove',function(event){
    plate.style.left = event.clientX - plate.offsetWidth / 2 + 'px';
    plate.style.top = event.clientY - plate.offsetHeight / 2 + 'px';
  
  }) ;
  

  if (x + ball.offsetWidth >= table.offsetWidth || x <= 0) {
    xV = -xV;
  }

  if (y + ball.offsetHeight >= table.offsetHeight || y <= 0) {
    yV = -yV;
  }
}
const SPEED = 10;
/*
document.addEventListener('keydown',function(event){
let x = parseInt(plate.style.left) || 0;

switch (event.code) {
  case 'ArrowLeft':
    x -= SPEED;
    break;
  case 'ArrowRight':
    x += SPEED;
    break;  
}

plate.style.left = x + 'px';

}); */




setInterval(updateBallPosition, 16);