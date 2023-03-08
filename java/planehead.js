function setup() {
    //happens once
    createCanvas(700,700);
}

function draw() {
    background(100);
    noStroke();

    let a = color('#000000');
    fill(a)
    beginShape();
    vertex(70,100);
    vertex(150,150);
    vertex(200,180);
    vertex(170,210);
    vertex(60,220);
    endShape(CLOSE);

}