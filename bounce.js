let x;
let y;


let xspeed;
let yspeed;

let pride;

var flags = 
[
"flags/dvd1.png",
"flags/dvd2.png",
"flags/dvd3.png",
"flags/dvd4.png",
"flags/dvd5.png",
"flags/dvd6.png",
"flags/dvd7.png",
"flags/dvd8.png",
"flags/dvd9.png",
"flags/dvd10.png",
"flags/dvd11.png",
"flags/dvd12.png",
"flags/dvd13.png",
"flags/dvd14.png",
"flags/dvd15.png",
"flags/dvd16.png",
"flags/dvd17.png",
"flags/dvd18.png",
"flags/dvd19.png"
];

var flagIndex = 0
var imageIndex = 0;
var position = createVector(0,0);
var velocity = p5.Vector.fromAngle(45);
velocity.mult(5);

function preload() 
{
    for (var i = 1; i < 8; i++)
    {
        var flags = loadImage('flags/')
    }
}

function pickImage() 
{
    var randomNum = Math.floor(Math.random() * flags.length);
    document.getElementById("myPicture").src = flags[randomNum];
}


function setup() {
  createCanvas(800, 600);
  x = random(width);
  y = random(height);
  xspeed = 4;
  yspeed = 4;
  pickImage();
}

function draw() {
  background(0);
  image(pride, x, y, );
  
  x = x + xspeed;
  y = y + yspeed;
  
  if (x + pride.width >= width)
    {
      xspeed = -xspeed;
      x = width - pride.width;
      pickImage();
    }
    else if (x <= 0)
    {
        xspeed = -xspeed;
        x = 0;
        pickImage();
    }
  
    if (y + pride.height >= height)
    {
      yspeed = -yspeed;
      y= height - pride.height;
      pickImage();
    }
    else if (y <= 0)
    {
        yspeed = -yspeed;
        y = 0;
        pickImage();
    }
}