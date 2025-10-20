let arama;

function preload(){
  
  //hey!! put this image file in the "arama" box!
  Creative1 = loadImage("Creative1.png");
 Creative2 = loadImage("Creative2.png");
   Creative3 = loadImage("Creative3.png");
 Creative4 = loadImage("Creative4.png");
  
}

function setup() {
  createCanvas(700, 700);
  
  noLoop();
  
}

function draw() {
  background(255);
 
  //----------------------start of lot drawing----------------------
  //call a random number for dialogue option.
  let rando = random(1, 4)
 let randomNumber =   round(rando);
  //let randomNumber = 2
 print(randomNumber);
  
  // Based on that number, assign a option (dialogue, pose, etc)
    //might need a second one of these for pose
  if (randomNumber === 1){
        push();
  scale(0.3);
  image(Creative2, 200, 0);
  pop();
      } else if (randomNumber === 2) {
     
        push();
  scale(0.3);
  image(Creative3, 200, 0);
  pop();
        
      } else if (randomNumber === 3) {
        
        push();
  scale(0.3);
  image(Creative4, 200, 0);
  pop();
        
      } else {
      
  push();
  scale(0.3);
  image(Creative1, 200, 0);
  pop();
        
      }
  //------------end of lot drawing----------------
  
 
  
//   //here's the temporary rectangle for visual purpose. that's all it does
//   fill(random(0, 255), random(0, 255), random(0, 255));
//   rectMode(CENTER);
//   rect(320, 370, 50, 50);
  
 
}

//when the mouse is clicked, redraw the canvas
  //this also handles the constraint
function mousePressed() {
  //if clicked in a certain area, then do this. if not, ignore. This constrains to braincell coordinates
  
  let mx = mouseX
  let my = mouseY
    //commented out, was here for test purposes
  //print(mx);
    //dear lord this was complicated... basically nesting my y restraint inside of my x restraint. change coordinates for final braincell
  if(mx < 500){
     
    if(100 < mx){
      
      if(my < 500){
        
         if(100 < my){
           
            redraw();
           
         }  
        
         }
      
       }
    
     }else{
       
     }
  
  
}