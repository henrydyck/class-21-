var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 200, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject1= createSprite(100, 400, 50, 50);
  gameObject2= createSprite(300, 400, 50, 50);
  //movingRect.velocityX = 5;
  //fixedRect.velocityX = -5;

  gameObject1.velocityX = 5;
  gameObject2.velocityX = -5;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;


  if(col(movingRect, gameObject2)){
    movingRect.shapeColor = "purple";
    gameObject2.shapeColor = "purple";
  }
  else{
    movingRect.shapeColor = "red";
    gameObject2.shapeColor = "red";
  }

  bunce(gameObject1,gameObject2);
 
  
  drawSprites();
}

//collision detection program
function col(zada, nana){
    //DETECTING COLLISION
    if (zada.x - nana.x < nana.width/2 + zada.width/2
      && nana.x - zada.x < nana.width/2 + zada.width/2
      && zada.y - nana.y < nana.height/2 + zada.height/2
      && nana.y - zada.y < nana.height/2 + zada.height/2) {
    
        return true;
    }
    else {
        return false;
    }
}

//bounce function
function bunce (rubie, costco){

//BOUNCE OFF ALGORITHM
    /*
    If the objects are touching
    the direction of movement is reversed
    */

   if (rubie.x - costco.x < costco.width/2 + rubie.width/2
    && costco.x - rubie.x < costco.width/2 + rubie.width/2) {

    //x direction is reversed
    rubie.velocityX = rubie.velocityX *(-1);
    costco.velocityX = costco.velocityX *(-1);
}

if (rubie.y - costco.y < costco.height/2 + rubie.height/2
    && costco.y - rubie.y < costco.height/2 + rubie.height/2){
    //y direction is reversed
    rubie.velocityY = rubie.velocityY *(-1);
    costco.velocityY = costco.velocityY *(-1);

}
  
}

/*
return ==> keywords that gives back a value to the calling function

ARGUMENTS
  - Real values given to a function while using it
  - They take some memory in the storage    
  - Function is accepting/taking arguments
  - Passing arguments to a function                                                                                                         

PARAMETERS
  - Not real values
  - Do not take any memory in the storage
  - PLACEHOLDERS for arguments

*/


