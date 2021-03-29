let canvas_dist;


function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    frameRate(10);
    // Use the dist() function to calculate the diagonal distance across the canvas
    canvas_dist = dist(0, 0, width, height);
}

function draw() {

    background(255, 40);

    // Nested for loops to draw a grid of ellipses
    for(let i = 0; i < width; i += 15) {
        for(let j = 0; j < height; j += 15) {

            // Calculate the distance between mouse position and each ellipse's position
            let size = dist(mouseX, mouseY, i, j);

            // Reassign size to be proportional to the size of the canvas
            size = (size / canvas_dist) * 70;
            fill(random(0, 155));

            // Set width and height of ellipse to size variable
            ellipse(i, j, size, size);
        }
    }
}
