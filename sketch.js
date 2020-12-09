var wall, car;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  car= createSprite(50, 200, 50, 50);
  wall= createSprite(1400, 200, 60, height/2);

  wall.shapeColor= color(80,80,80)
  car.shapeColor= color("purple")

  speed= random(55, 90)
  weight= random(400, 1500)

  car.velocityX= speed;

}

function draw() {
  background("skyblue");  

  if( wall.x - car.x < wall.width/2 + car.width/2)
  {
   car.velocityX= 0;
   var deformation= 0.5 * weight * speed * speed/22509;

   if(deformation<180)
   {
    car.shapeColor= color("red")
   }
   if(deformation<180 && deformation>100)
   {
    car.shapeColor= color("yellow")
   }
   if(deformation>100)
   {
    car.shapeColor= color("lightgreen")
   }

  }


  drawSprites();
}