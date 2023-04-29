function preload() {
}
function setup() {
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();
    tint_color="";
}
function draw() {
    image(video,0,0,640,480);
    tint(tint_color);
    circle(30, 30, 20);
    describe('white circle with black outline in mid of gray canvas');
    ellipse(56, 46, 55, 55);
    describe('white ellipse with black outline in middle of a gray canvas');
    rect(30, 20, 55, 55);
    describe('white rect with black outline in mid-right of canvas');
}
function take_snapshot() {
    save('student_name.png');
}
function filter_tint() {
    tint_color=document.getElementById("color_name").value;
}