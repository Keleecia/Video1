var counter = 60;
var followCam;
var randBuildings = 0;
var building1,building2,building3,building4,building5,building6,building7;
var concreate;
var rand;
var theBuilding;
var buildings;
var theBuildImages = [];
var manWalk;

function preload()
{
  building1  = loadImage("image/Building1.PNG");
  building2 = loadImage("image/Building2.PNG");
  building3 = loadImage("image/Building3.PNG");
  building4 = loadImage("image/Building4.PNG");
  building5 = loadImage("image/Building5.PNG");
  building6 = loadImage("image/Building6.PNG");
  building7 = loadImage("image/Building7.PNG");
  manWalk = loadAnimation("MrMan/MrMan1.PNG","MrMan/MrMan2.PNG","MrMan/MrMan1.PNG");
}


function setup() {
  createCanvas(1600,648);

  concreate = loadImage("image/Concrete.PNG");

  rand = Math.round(random(0,6));
  theBuildImages = [building1,building2,building3,building4,building5,building6,building7];
  
  followCam = createSprite(0,0,10,10);
  followCam.addAnimation("followCam",manWalk);
  followCam.scale = 0.03


  startTimer = createButton("Count Down");
  startTimer.mouseClicked(beginTimer); 

 function counting()
 {
   counter = counter - 1;
 }
 function beginTimer()
 {
  interval = setInterval(counting, 1000);

 }
 
rows(); 



}



function draw() {
  background(0,0,26);
  frameRate(100);
  //0, 0, 26
  
  if(counter <1)
  {
    clearInterval(interval);
  }

  strokeWeight(2)
  text(counter,50,50,100);

  camera.position.x=followCam.x;
  camera.position.y=followCam.y; 
 
  drawSprites();
  followingCam();

  buildings.bounceOff(followCam);
  followCam.setCollider("rectangle",0,0,100,100);
  buildings.debug = true;
  followCam.debug = true;

}


function rows()
{
  

  for (v = 10; v<3000; v= v+ 200)
  {
      for(i = 90; i < 3000; i = i + 600)
      {
        
        // stroke(14,76,35)
        // strokeWeight(4);
        // noFill();
        // circle(i,v,20);
        buildings = createSprite(i,v,50,50);
        buildings.scale = 3;
       
        switchBuildings();
      
  }

  
  }

}
function followingCam()
{
  if (keyIsDown(UP_ARROW))
  {
    followCam.y = followCam.y- 15;  
  }
  if (keyIsDown(DOWN_ARROW))
  {
    followCam.y = followCam.y+ 15;  
  }
  if (keyIsDown(LEFT_ARROW))
  {
    followCam.x = followCam.x- 15;  
  }
  if (keyIsDown(RIGHT_ARROW))
  {
    followCam.x = followCam.x + 15;  
  }
   
}

function switchBuildings()
{


 randBuildings = Math.round(random(1,6));

 switch(randBuildings)
 {
   case 1:
     buildings.addImage(building1);
     break;
   case 2:
     buildings.addImage(building2);
     break;
     case 3:
      buildings.addImage(building3);
      break;
       case 4:
      buildings.addImage(building4);
      break;
       case 5:
      buildings.addImage(building5);
      break;
       case 6:
      buildings.addImage(building6);
      break; 
  





     
 }
 console.log(buildings);


}








//randBuildings = Math.round(random(1,7));
 // switch(randBuildings)
  // {
    
  //   case 1: 
  //   for (u = 10; u<400; u= u+ 100)
  // {
  //     for(y = 90; y < 400; y = y + 100)
  //     {
  //       buildings1 = image(building1,y,v,50,50);
  //     }
  // }
   
  //   break;
  //   case 2:
  //     for (u = 10; u<400; u= u+ 100)
  //     {
  //         for(y = 90; y < 400; y = y + 100)
  //         {
  //           buildings2 = image(building2,y,v,50,50);
  //         }
  //     }
  //   break;
  //   case 3:
  //     for (u = 10; u<400; u= u+ 100)
  //     {
  //         for(y = 90; y < 400; y = y + 100)
  //         {
  //           buildings3 = image(building3,y,v,50,50);
  //         }
  //     }
  //   break;
  //   case 4:
  //     for (u = 10; u<400; u= u+ 100)
  //     {
  //         for(y = 90; y < 400; y = y + 100)
  //         {
  //           buildings4 = image(building4,y,v,50,50);
  //         }
  //     }
  //   break;
  //   case 5:
  //     for (u = 10; u<400; u= u+ 100)
  //     {
  //         for(y = 90; y < 400; y = y + 100)
  //         {
  //           buildings5 = image(building5,y,v,50,50);
  //         }
  //     }
  //   break;
  //   case 6:
  //     for (u = 10; u<400; u= u+ 100)
  //     {
  //         for(y = 90; y < 400; y = y + 100)
  //         {
  //           buildings6 = image(building6,y,v,50,50);
  //         }
  //     }
  //   break;
  //   case 7:
  //     for (u = 10; u<400; u= u+ 100)
  //     {
  //         for(y = 90; y < 400; y = y + 100)
  //         {
  //           buildings7 = image(building7,y,v,50,50);
  //         }
  //     }
  //   break;
 
 // }