//Create array of Computer Parts
//{} = creating array of objects
let pcparts = [{
  name: "CPU",
  description: "Central Proccesing Unit"
}, {
  name: "GPU",
  description: "Graphic Proccesing Unit"
}, {
  name: "RAM",
  description: "Random Access Memory"
}, {
  name: "MOTHERBOARD",
  description: "Main Housing for Pc Parts"
}, {
  name: "SSD",
  description: "Solid State Drive"
}, {
  name: "HDD",
  description: "Hybrid Hard Drive"
}]

//To universally change text position
let x = 50
let y = 50

let randomIndex;
let counter = 0;
let changeBackground;
let animating = false;
let button;

function setup() {
  createCanvas(512, 512);
  background(230);
  fill(0, 102, 153);
  textSize(32);
  // text("Click to Randomize", 150, y);

  setTimeout(changeBackground, 1000);

  //Button For randomizer
  button = createButton("Click to Randomize");
  button.mousePressed(buttonPressed);
  button.class("randomizerButton");

}

function draw() {
  display();
}

function display() {
  //if animating is true then ellipses will be drawn on the screen
  // two equal signs are used to check if the function "animating" is true or not
  // using one equal signs means you are assigning the funtion "animating" to either true or false
  if (animating == true) {
    fill(random(255), random(100, 200), random(100))
    ellipse(random(width), random(height), random(50, 200))
  }
}
//Objective is to call randomizer when mouse is pressed
function randomizer() {
  //once randomizer is called, the animating will be set to false to stop the animation
  animating = false
  if (pcparts[0]) {
    background(random(200, 255));
    randomIndex = int(random(pcparts.length));
    //Creating a sentance for viwers using template literals
    text(`${pcparts[randomIndex].name} stands for ${pcparts[randomIndex].description}`, x, y);
    pcparts.splice(randomIndex, 1);
  } else {
    background(random(200, 255));
    text("nothing left!", x, y);
  }
}

function buttonPressed() {
  animating = true;
  //Once user clicks 2 seconds will pass before text changes
  setTimeout(randomizer, 2000);
}

//**This is used to change background if the counter is greater than or equal to 5 once it reaches top it stops
// function changeBackground (){
//   if (counter >=5){
//     counter++;
//     console.log(counter)
//   background(random(255), random(255), random(255),)
//   setTimeout(changeBackground, 1000);
// }else {
//
// }
// }
