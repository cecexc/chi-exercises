function setup() {
    createCanvas(900,1000);
}

function draw() {
    background(135,206,235);

    for(let x = 0; x < 1000; x = x + 200) {
        drawFlower(x,100,255,192,203);
    }

    for(let x = 0; x < 1000; x = x + 200) {
        drawFlower(x,300,252,142,172);
    }

    for(let x = 0; x < 1000; x = x + 200) {
        drawFlower(x,500,231,84,128);
    }

    for(let x = 0; x < 1000; x = x + 200) {
        drawFlower(x,700,222,49,99);
    }

    for(let x = 0; x < 1000; x = x + 200) {
        drawFlower(x,900,195,33,72);
    }
}

function drawFlower(x,y,r,g,b) {
    push();
    translate(x,y);
    fill(r,g,b);
    stroke(86,3,25);

    beginShape();
    vertex(0,0);
    bezierVertex(50,-30,100,-50,150,50);
    bezierVertex(50,50,100,0,150,80);
    endShape(CLOSE);
    rotate(1);
    beginShape();
    vertex(0,0);
    bezierVertex(50,-30,100,-50,150,50);
    bezierVertex(50,50,100,0,150,80);
    endShape(CLOSE);
    rotate(1);
    beginShape();
    vertex(0,0);
    bezierVertex(50,-30,100,-50,150,50);
    bezierVertex(50,50,100,0,150,80);
    endShape(CLOSE);
    rotate(1);
    beginShape();
    vertex(0,0);
    bezierVertex(50,-30,100,-50,150,50);
    bezierVertex(50,50,100,0,150,80);
    endShape(CLOSE);
    rotate(1);
    beginShape();
    vertex(0,0);
    bezierVertex(50,-30,100,-50,150,50);
    bezierVertex(50,50,100,0,150,80);
    endShape(CLOSE);
    rotate(1);
    beginShape();
    vertex(0,0);
    bezierVertex(50,-30,100,-50,150,50);
    bezierVertex(50,50,100,0,150,80);
    endShape(CLOSE);

    fill(255,255,100)
    circle(0,0,50)
    pop();
}