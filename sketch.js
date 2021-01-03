var fixedrect,movingrect ; 

function setup() {
  createCanvas(1200,800);
    fixedrect =  createSprite(200, 200, 50, 80);
    movingrect =  createSprite(200, 200, 80, 50);
    movingrect.shapeColor = "yellow"
        fixedrect.shapeColor = "yellow"
        fixedrect.debug = true;
                movingrect.debug = true;


}

function draw() {
  background("black");  
    movingrect.x  =  World.mouseX;
    movingrect.y  =  World.mouseY;
    
    if(movingrect.x - fixedrect.x < fixedrect.width/2 + movingrect.width/2
    && fixedrect.x - movingrect.x  <fixedrect.width/2 + movingrect.width/2
    && movingrect.y - fixedrect.y < fixedrect.height/2 + movingrect.height/2
    && fixedrect.y - movingrect.y  <fixedrect.height/2 + movingrect.height/2){
         
         movingrect.shapeColor = "red";
         fixedrect.shapeColor = "red";  
    }  else{
      movingrect.shapeColor = "yellow";
         fixedrect.shapeColor = "yellow";  
    }
   

   

  drawSprites();
}