
function preload() {
    //load the images here
   bg = loadImage("garden.png");
   cat1 = loadAnimation("cat1.png");
   cat2 = loadAnimation("cat2.png", "cat3.png");
   cat3 = loadAnimation("cat4.png");
   mouse1 = loadAnimation("mouse1.png");
   mouse2 = loadAnimation("mouse2.png", "mouse3.png");
   mouse3 = loadAnimation("mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
  tom = createSprite(870, 650, 20, 20);
  jerry = createSprite(200, 650, 20, 20);
  tom.addAnimation("cat_sitting", cat1);
  jerry.addAnimation("mouse_start", mouse1);
  tom.scale = 0.2;
  jerry.scale = 0.1;
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x<(tom.width-jerry.width)/2){
        tom.velocityX = 0;
        tom.addAnimation("tom_lastimg", cat3);
        tom.x = 300;
        tom.changeAnimation("tom_lastimg");
        tom.scale = 0.25;
        jerry.addAnimation("mouse_magnify", mouse3);
        jerry.changeAnimation("mouse_magnify");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyDown("left")){
tom.velocityX = -3;
tom.addAnimation("cat_walking", cat2);
tom.changeAnimation("cat_walking")
jerry.addAnimation("jerry_moving", mouse2);
jerry.frameDelay = 25;
jerry.changeAnimation("mouse_walking");
}

}
