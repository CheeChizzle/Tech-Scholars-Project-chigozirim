//declaring sprite variables
var ms_terrell, principal;
var fStudent1, fStudent2, fStudent3;
var mStudent1, mStudent2, mStudent3;
var desk1, desk2, desk3, desk4;
var time, students_sleeping = 1;
var gameIsOver = false, principal_is_here = false;
var x = 680;
var y = 480;


function setup() {
  createCanvas(windowWidth, windowHeight);
  //initializing student sprite variables
  sleeping = createSprite(500, 500);
  sleeping.addImage(loadImage('assets/sleeping.png'));
  sleeping.scale = 0.05;

  fStudent1 = createSprite(200, 70); //upper left
  fStudent1.addImage(loadImage('assets/fem_student.png'));
  (fStudent1).scale = (0.75)

  fStudent2 = createSprite(200, 270); //lower left
  fStudent2.addImage(loadImage('assets/fem_student.png'));
  (fStudent2).scale = (0.75)

  fStudent3 = createSprite(1160, 270); //lower right
  fStudent3.addImage(loadImage('assets/fem_student.png'));
  (fStudent3).scale = (0.75)

  mStudent1 = createSprite(680, 70); //upper middle
  mStudent1.addImage(loadImage('assets/mal_student.png'));
  (mStudent1).scale = (0.75)

  mStudent2 = createSprite(1160, 70); //upper right
  mStudent2.addImage(loadImage('assets/mal_student.png'));
  (mStudent2).scale = (0.75)

  mStudent3 = createSprite(680, 270); //lower middle
  mStudent3.addImage(loadImage('assets/mal_student.png'));
  (mStudent3).scale = (0.75)

  //initializes desk sprite variables
  desk1 = createSprite(200, 100); //upper left
  desk1.addImage(loadImage('assets/desk.png'));
  (desk1).scale = (0.55)

  desk2 = createSprite(680, 100); //upper middle
  desk2.addImage(loadImage('assets/desk.png'));
  (desk2).scale = (0.55)
  
  desk3 = createSprite(1160, 100); //upper right
  desk3.addImage(loadImage('assets/desk.png'));
  (desk3).scale = (0.55)

  desk4 = createSprite(200, 300); //lower left
  desk4.addImage(loadImage('assets/desk.png'));
  (desk4).scale = (0.55)

  desk5 = createSprite(680, 300); //lower middle
  desk5.addImage(loadImage('assets/desk.png'));
  (desk5).scale = (0.55)

  desk6 = createSprite(1160, 300); //lower right
  desk6.addImage(loadImage('assets/desk.png'));
  (desk6).scale = (0.55)

  //initializing ms terrell sprite
  ms_terrell = createSprite(x, y);
  ms_terrell.addImage(loadImage('assets/mary_church.png'));
  (ms_terrell).scale = (0.75)

  // if elapsed time occurs, run principal arrives function
  //set a timer and then use random function to pick random function. if the random number == timer, then principal arrives
  time = Math.random()*2000;

  //GIVES VOTE SPRITE POSITION A RANDOM POSITION
  zX = random(width) - 30;
	zY = random(height) - 30;
}

function draw() {
  background(231, 201, 141); 
  if (principal_is_here && studIsSleeping()) {
    gameIsOver = true;
  } else{
    ;
  }
  //COLLISION
   ms_terrell.collide(fStudent1);
   ms_terrell.collide(fStudent2);
   ms_terrell.collide(fStudent3);
   ms_terrell.collide(mStudent1);
   ms_terrell.collide(mStudent2);
   ms_terrell.collide(mStudent3);
//WHEN VOTE COLLIDES WITH SPRITE, CALL handleCollision FUNCTION
	sleeping.collide(ms_terrell, handleCollision);
  drawSprites();
  keyPressed();
  handleTime();

}
// function gameOver() {
//       gameIsOver = true;
// }

function principalArrives(){
	if(!gameIsOver){
      //initializing principal sprite
      principal_is_here = true;
      principal = createSprite(40, y);
      principal.addImage(loadImage('assets/principal.png'));
      (principal).scale = (0.75)
      drawSprites();
	}
}
function generatesSleeping() {
  	if(!gameIsOver){
      sleeping = createSprite(200, 200);
      sleeping.addImage(loadImage('assets/sleeping.png'));
      sleeping.scale = 0.05;
      sleeping.position.x = zX;
  	  sleeping.position.y = zY;
      students_sleeping++;
    }
}
function handleCollision(spriteA, spriteB) {
	spriteA.remove();
  if (!gameIsOver) {
    zY = random(height);
    zX = random(width);
    students_sleeping--;
		generatesSleeping();
  }
}

function handleTime() {
  if (time > 0) {
    time -= 1;
  } else {
    principalArrives();
    text(`PRINCIPAL HAS ARRIVED!`, 20, 60);
  }
}
function keyPressed() {//allows user to control via arrow keys 
 if(!gameIsOver){ // when game is over, user cannot move
 if (keyIsDown(LEFT_ARROW)) {
    ms_terrell.position.x -= 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    ms_terrell.position.x += 5;
  }

  if (keyIsDown(UP_ARROW)) {
    ms_terrell.position.y -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    ms_terrell.position.y += 5;
  }
 }
}
function studIsSleeping() {
  if (students_sleeping > 0) { //if there is 1 or more stud sleeping
    return true; // return true
  }
  if (students_sleeping == 0) { //if no students are sleeping
    return false;
  }
}
