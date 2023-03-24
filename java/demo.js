function setup() {
    createCanvas(720, 400);
    background(0,212,99);
    drawFace(100, 200, 30);  // left face with bigger eyes 
    drawFace(300, 200, 10);  // right face
    drawFace(500,200,80);
  }
  
  function drawFace(x, y, eyeSize) {
    push();
    fill(200, 100, 150);
    translate(x,y);
    ellipse(0, 0, 100, 150); //head
    drawEye(-15, -10, eyeSize);
    drawEye(15, -10, eyeSize);
    fill(37,120,97);
    rect(-30, 30, 60,5); //mouth
    pop();
  }
  
  function drawEye(x,y, eyeSize) {
    push();
    translate(x,y);
    fill(255); //white
    ellipse(0, 0, eyeSize, eyeSize);
    fill(0); //black
    ellipse(0, 0, eyeSize/2.0, eyeSize/2.0);
    pop();
  }

  function drawPetal(x,y) {
    let petalColor = fill(color(random(100,255), random(0,255),random(0,255)));
    
  }

  function drawFlower(x, y) {
    push();
    translate(x,y);

    fill(255,206,68);
    circle(0,0,50); //center
  }