function setup() {
    // Happens only once
    createCanvas(500,700);
}

function draw() {
    // Happens every single frame
    background(100);
    noStroke();

    fill(0);
    circle(80,100,50);
    
    fill(50);
    circle(200,200,25);
   
    fill(200);
    circle(400,210,60);

    fill(200);
    triangle(50,300,100,350,75,450);

    fill(255);
    triangle(100,350,180,350,120,420);

    fill(0);
    quad(180,350,400,320,440,400,200,410);
}