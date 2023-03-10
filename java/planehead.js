function setup() {
    //happens once
    createCanvas(700,700);
}

function draw() {
    background(50);
    noStroke();

    fill(0);
    beginShape();
    vertex(50,100);
    vertex(60,60);
    vertex(100,100);
    vertex(80,210);
    vertex(60,220);
    endShape();
    //forehead highlight
    fill(220);
    beginShape();
    vertex(280,130);
    vertex(420,130);
    vertex(400,220);
    vertex(300,220);
    endShape();
    //top of head
    fill(160);
    beginShape();
    vertex(250,80);
    vertex(450,80);
    vertex(420,130);
    vertex(280,130);
    endShape();
    //forehead midtones
    fill(160);
    beginShape();
    vertex(420,130);
    vertex(460,100);
    vertex()

}