//think of this as the empty box all functions can access
let arama;

function preload(){
  
  //hey!! put this image file in the "arama" box!
  arama = loadImage("OIP.jpg");
  
}

function setup() {
  createCanvas(400, 400);
  //noCursor();
  }

function draw() {
  
  background(220);
  
  // just a quick map so i can SHAKE arama (lovingly of course, there are no brains to damage)
  aramaX = map(mouseX, 0, width, 0, 400);
  aramaY = map(mouseY, 0, height, 0, 400);
  
  imageMode(CENTER);
  textAlign(CENTER);
  
  text('click', 225, 250);
  text('HERE', 225, 265);
  text('for arama', 225, 280);
  text('jumpscare', 225, 295);
  
  let a = color(200, 255, 150);
  
  //when clicked, she scale
  if(mouseIsPressed === true) { 
  scale(5);
    translate(-200, -200)
  }else{
    
  scale(1);
  };
  
      //tint!
 //tint(a);
  
  
    //hey!! pull the img from arama box!
  image(arama, aramaX, aramaY);
  
  
  //when clicked, apply filter. for some reason this only applies AFTER the image is drawn
     if (mouseIsPressed === true) {
      filter(THRESHOLD);

   }else{
      
   }
    //filter
  

      //more img. notes!!!
  //call img.loadPixels before any alterations, then img.updatePixels to update the image with your code (like a pushpop ordeal- they come in pairs!!) Aka applying features, etc.

  
  //get function
//basically an eyedropper tool. it can grab your present canvas as an image, then do stuff. Can select specific colors, make a "screenshot", etc.
  //ex. get(x1, y1, x2, y2); makes rectangle coordinates to "screenshot"
  // or get(x, y); selects color or a pixel at that cooridnate
  
}