function setup() {
    createCanvas(700, 400);
    background(52,28,0);
    drawFace(100, 300, 30, 40);  // left face with bigger eyes 
    drawFace(350, 200, 10, 5);  // right face
    drawFace(600,90,80, 60);   // beastly eyes and mouth
    drawFace(200,100, 40,300); // oh shit 
    for(var x = 0; x < 720; x = x + 35) {
      rect(x, 0, 10, 720);
      fill(100);
    } //prison
  }

  function drawFace(x, y, eyeSize, mouthSize) {
    push();
    fill(126, 11, 255);
    translate(x,y);
    ellipse(0, 0, 100, 150); //head
    drawEye(-15, -10, eyeSize);
    drawEye(15, -10, eyeSize);
    drawMouth(-30, 30, mouthSize); //mouth
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

  function drawMouth(x,y, mouthSize) {
    push();
    translate(x,y);
    fill(255,133,32);
    rect(0, 0, 60, mouthSize);
    pop();
  }