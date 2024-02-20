let j;
function setup() {
    // put setup code here
    createCanvas(400,400)
    createCanvas((windowWidth/2), windowHeight/2);


    x = 199;
    y = 199;
    j = 0;

    rectWidth = 90;
    rectHeigth = 90;

    N = 44
    L = 7;
    P = N - L;


}

function windowResized() {
    resizeCanvas(windowWidth);
}


function draw() {
    background(0,191,255)
    stroke(255,255,255)
    strokeWeight(7);
    line(windowWidth/2, 0, windowWidth/2, windowHeight)
    line(0, windowHeight, windowWidth/2, windowHeight)
    line(329,0,329,329)

    var y = 199 + 30 * Math.sin(PI/10*j)
    j+=1
    fill("PINK")
    ellipse(x-30, y-90, rectHeigth-55, rectWidth-35)

    fill("PINK")
    ellipse(x+280, y-90, rectHeigth-55, rectWidth-35)

    fill("ORANGE")
    ellipse(x-70, y-90, rectHeigth-55, rectWidth-35)

    fill("ORANGE")
    ellipse(x+320, y-90, rectHeigth-55, rectWidth-35)

    fill("YELLOW")
    strokeWeight(0)
    ellipse(x-50, y-50 , rectWidth, rectHeigth, 0, 2*PI *P/N);

    fill("YELLOW")
    strokeWeight(0)
    ellipse(x+300, y-50 , rectWidth, rectHeigth, 0, 2*PI *P/N);

    fill("BLACK")
    ellipse(x-70, y-70, rectHeigth-80, rectWidth-80)

    fill("BLACK")
    ellipse(x+280, y-70, rectHeigth-80, rectWidth-80)

    fill("WHITE")
    ellipse(x-70, y-69, rectHeigth-85, rectWidth-85)

    fill("WHITE")
    ellipse(x+280, y-69, rectHeigth-85, rectWidth-85)

    fill("BLACK")
    ellipse(x-30, y-70, rectHeigth-80, rectWidth-80)

    fill("BLACK")
    ellipse(x+320, y-70, rectHeigth-80, rectWidth-80)

    fill("WHITE")
    ellipse(x-30, y-69, rectHeigth-85, rectWidth-85)

    fill("WHITE")
    ellipse(x+320, y-69, rectHeigth-85, rectWidth-85)

    stroke("PINK")
    strokeWeight(4)
    fill("RED")
    ellipse(x-50, y-40, rectHeigth-75, rectWidth-63)

    stroke("PINK")
    strokeWeight(4)
    fill("RED")
    ellipse(x+300, y-40, rectHeigth-75, rectWidth-63)
}