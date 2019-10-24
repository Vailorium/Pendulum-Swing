var c;
var ctx;

const STRINGRADIUS = 10;

const gravity = 9.81;

var angle = 50;

var velocity = 0;

var mass = 1;

var timeMultiplier = 1;
$("document").ready(() => {
    c = document.getElementById("mainCanvas");
    ctx = c.getContext("2d");

    ctx.beginPath();

    // ctx.moveTo(2500, 0);

    // ctx.lineTo(2500, STRINGRADIUS * 1000);

    ctx.lineWidth = 30;
    // ctx.stroke();

    var period = 2 * Math.PI * Math.sqrt(STRINGRADIUS / gravity);
    $("#period").text(period.toFixed(2));

    var fakePeriod = period / timeMultiplier;
    $("#fakePeriod").text(fakePeriod.toFixed(2));

    // swingLine();

    // requestAnimationFrame(tick);

    // runPhysics();

    setInterval(function(){
        $("#FPS_COUNT").text(FPS);
        $("#velocity").text(velocity.toFixed(2));
        $("#angle").text(angle.toFixed(2));
    }, 60);
});

var FPS = 0;
function tick(){
    FPS++;
    setTimeout(function(){
        FPS--;
    }, 1000);

    runPhysics();
    calculateLocation();

    requestAnimationFrame(tick);
}

function runPhysics(){
    var angularAcceleration = (gravity / STRINGRADIUS) * (angle * Math.PI / 180);

    velocity += angularAcceleration / (1000 / timeMultiplier / 60);

    console.log(angularAcceleration);

    // $("#velocity").text(velocity * STRINGRADIUS);

    angle -= velocity;

    // console.log(velocity);
}


function calculateLocation(){
    ctx.strokeStyle ="red";
    ctx.beginPath();
    ctx.clearRect(0, 0, 5000, 5000);
    ctx.moveTo(2500, 0);

    // angle += 10;

    var x = 2500 + (STRINGRADIUS * 1000) * Math.sin(angle * Math.PI / 180);
    var y = 0 + (STRINGRADIUS * 1000) * Math.cos(angle * Math.PI / 180);

    // console.log(Math.sqrt(Math.pow(x / 1000 - 2.5, 2) + Math.pow(y / 1000, 2))); // see if line is still 1m


    ctx.lineTo(x, y);


    ctx.stroke();

    ctx.moveTo(x, y); 
    
    // ctx.font = "100px Arial";
    // ctx.fillStyle = "white";
    // ctx.fillText(`${1}kg`, x - 50, y + 100);
    // ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.arc(x, y, 100, 0, 2 * Math.PI);
    ctx.fill();
}