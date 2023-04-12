// Random landscape template
function setup() {
  // Set global variables for your design here.
  // You'll set variables that change with each tree in draw().
  createCanvas(1200, 400);
  noLoop(); // This will prevent jitter.
}

function draw() {
  background("azure");
  // Use a loop to make a lot of items.
  for (let counter = 0; counter < 15; counter++) {
    // Set random parameters for tree position and height.
    addHouse(random(width), 300, random(0.5, 1.5), random(0, 200))
  }
}

function addHouse(x, y, Hsize, hue) {
  // Remember to push and pop any transforms
  // so they don't affect shapes outside the function.

  push()
  
  translate(x, y)
  scale(Hsize)
  
  
  
  fill("hsl(200, 50%, 50%)")
  triangle(0, 30, 50, 30, 25, 0)
  fill("pink")
  rect(0, 30, 50)
  fill("maroon")
  rect(20, 60, 10, 20)
  rect(30, 5, 10, 20)
  fill("lightblue")
  rect(10, 40, 10)
  rect(30, 40, 10)
  pop()
}
