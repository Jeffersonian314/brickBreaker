var ellipseX, ellipseY, xSpeed;

var ySpeed = 5;

var paddleWidth = 80;
var paddleHeight = 15;
var bottomGap = 40;

var playing = false;
var paddle;

var paddleY; 
var paddleX_left;
var paddleX_right;

function setup() {
  createCanvas(400, 600);
  ellipseX = width/2;
  ellipseY = height/2;
  xSpeed = random(-5, 5);
}


function draw() {
  paddleY = height - bottomGap - paddleHeight;
  paddleX_left = mouseX - (paddleWidth/2);
  paddleX_right = mouseX + (paddleWidth/2);
  
  background(250);

  fill(0);
  
 if (ellipseY > height){
    playing = false; // restart game
  }else if (ellipseY < 0) {
    ySpeed = 3; // reverse ball to go up
  }

 
  
  if (ellipseX > width) {
      xSpeed -= 3;
    } else if (ellipseX < 0) {
      xSpeed = 3;
  }

 if (playing == true){
    ellipseX += xSpeed;
    ellipseY += ySpeed;
    // start game and make paddle follow the mouse
   paddle = rect( mouseX - (paddleWidth/2) ,height - bottomGap - paddleHeight,paddleWidth, paddleHeight);
   ellipse(ellipseX, ellipseY, 30, 30);
 }else if (playing == false){
   //reset the game and draw square in the middle
  ellipseX = width/2;
  ellipseY = height/2;
  paddle = rect(width/2 - paddleWidth/2, height - bottomGap - paddleHeight, paddleWidth, paddleHeight);
  ellipse(ellipseX, ellipseY, 30, 30);
 }
 
// (ellipseY >  paddle) &&
if (  (ellipseY >  paddleY) && (ellipseX > paddleX_left) && (ellipseX < paddleX_right)  ){
  ySpeed -= 3;
}
  
  
}

function mouseClicked(){
  playing = true;
  console.log(playing);
}

function mouseMoved(){

  rect(width/2 - paddleWidth/2, height - bottomGap - paddleHeight, paddleWidth, paddleHeight);
}