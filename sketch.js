//declaring sprite variables
var ms_terrell, principal;
var fStudent1, fStudent2, fStudent3;
var mStudent1, mStudent2, mStudent3;
var desk1, desk2, desk3, desk4;

function setup() {
  createCanvas(1360,625);
  //initializing student sprite variables
  fStudent1 = createSprite(200, 170); //upper left
  fStudent1.addImage(loadImage('assets/fem_student.png'));

  fStudent2 = createSprite(200, 370); //lower left
  fStudent2.addImage(loadImage('assets/fem_student.png'));

  fStudent3 = createSprite(1160, 370); //lower right
  fStudent3.addImage(loadImage('assets/fem_student.png'));

  mStudent1 = createSprite(680, 170); //upper middle
  mStudent1.addImage(loadImage('assets/mal_student.png'));

  mStudent2 = createSprite(1160, 170); //upper right
  mStudent2.addImage(loadImage('assets/mal_student.png'));

  mStudent3 = createSprite(680, 370); //lower middle
  mStudent3.addImage(loadImage('assets/mal_student.png'));

  //initializes desk sprite variables
  desk1 = createSprite(200, 200); //upper left
  desk1.addImage(loadImage('assets/desk.png'));

  desk2 = createSprite(680, 200); //upper middle
  desk2.addImage(loadImage('assets/desk.png'));
  
  desk3 = createSprite(1160, 200); //upper right
  desk3.addImage(loadImage('assets/desk.png'));

  desk4 = createSprite(200, 400); //lower left
  desk4.addImage(loadImage('assets/desk.png'));

  desk4 = createSprite(680, 400); //lower middle
  desk4.addImage(loadImage('assets/desk.png'));

  desk5 = createSprite(1160, 400); //lower right
  desk5.addImage(loadImage('assets/desk.png'));

  //initializing ms terrell sprite
  ms_terrell = createSprite(200, 200);
  ms_terrell.addImage(loadImage('assets/mary_church.png'));

  //initializing principal sprite
  principal = createSprite(30, 500);
  principal.addImage(loadImage('assets/principal.png'));
}

function draw() {
  background(231, 201, 141); 

  //calling variables
  ms_terrell.position.x = mouseX;
  ms_terrell.position.y = mouseY;

  drawSprites();
}