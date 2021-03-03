var canvas,edges;
var music;
var surface1,surface2,surface3,surface4;
var box;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1=createSprite(100,550,170,30);
    surface1.shapeColor="blue"
    surface2=createSprite(290,550,170,30);
    surface2.shapeColor="orange";
    surface3=createSprite(480,550,170,30);
    surface3.shapeColor="deeppink";
    surface4=createSprite(670,550,170,30);
    surface4.shapeColor="green";
    //create box sprite and give velocity
    box=createSprite(random(20,750),20,30,30);
    box.shapeColor="white";
    box.velocityX=2;
    box.velocityY=4;
}

function draw() {
background(rgb(169,169,169));
    //create edgeSprite
    
edges=createEdgeSprites();
box.bounceOff(edges);

if(surface1.isTouching(box) && box.bounceOff(surface1)){
    box.shapeColor="blue";
    music.play();
}
if(surface2.isTouching(box)){
    box.shapeColor="orange";
    box.velocityX=0;
    box.velocityY=0;
    music.stop();
}
if(surface3.isTouching(box) && box.bounceOff(surface3)){
    box.shapeColor="deeppink";
}
if(surface4.isTouching(box) && box.bounceOff(surface4)){
    box.shapeColor="green";
}

drawSprites();
    //add condition to check if box touching surface and make it box
   
}
