
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

const player = new Character(0,0);
const treasure = new Treasure(0,0);
treasure.setRandomPosition();



// Iteration 1
function drawGrid() {
  console.log(player);
  context.strokeStyle = "#444";
  
  for(let i = 0; i < 11; i++){
    context.beginPath();
    context.moveTo(i*50,0);
    context.lineTo(i*50, height);
    context.stroke();
    context.closePath();
  }

  for(let i = 0; i < 11; i++){
    context.beginPath();
    context.moveTo(0,i*50);
    context.lineTo(width, i*50);
    context.stroke();
    context.closePath();
  }
}

function drawEverything() {
  context.clearRect(0,0,500,500);
  drawGrid();
  drawPlayer(player);
  drawTreasure();
}


function drawPlayer(player){
  context.drawImage(player.img, player.column* 50, player.row * 50,  50, 50);
}

function drawTreasure(){
  
  context.drawImage(treasure.img, treasure.column*50, treasure.row*50, 50, 50);
}

window.addEventListener('keydown', (event) =>{
  switch (event.keyCode) {
    //up
    case 38:
      player.moveUp();
      break;
    //down
    case 40:
      player.moveDown();
      break;
    //left
    case 37:
      player.moveLeft();
      break;
    //right
    case 39:
      player.moveRight();
      break;
  
    default:
      break;
  }
})

window.addEventListener('load', ()=>{
  drawEverything();
})




