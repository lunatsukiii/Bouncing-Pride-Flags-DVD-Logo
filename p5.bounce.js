new p5(function (sketch) {
var images = [];
var imageIndex = 0;
var position = sketch.createVector(0,0);
var velocity = p5.Vector.fromAngle(45);
velocity.mult(5);

  /**
   * Checks boundary collision.
   *
   * @param {p5.Image} image
   * @return {boolean}
   */

function checkBoundaryCollision(image)
{
  var hasCollision = false;

  if (position.x < 0 || position.x + image.width > sketch.width)
  {
    velocity.x *= -1;
    hasCollision = true;
  }

  if (position.y < 0 || position.y + image.height > sketch.height) 
  {
    velocity.y *= -1;
    hasCollision = true;
  }
  return hasCollision;
}
sketch.preload = function() 
{
    for (var i = 1; i < 28; i++)
    {
        var image = sketch.loadImage("flags/dvd" + i + ".jpg"  );
        images.push(image)
    }
}
sketch.setup = function()
{
  sketch.createCanvas(window.innerWidth, window.innerHeight);
}
sketch.draw = function() 
{
  sketch.background("#111");
  var image = images[imageIndex];
  var hasCollision = checkBoundaryCollision(image);
  if (hasCollision)
  {
    imageIndex++;
    if (imageIndex + 1 > images.length) 
    {
      imageIndex = 0;
    }
    image = images[imageIndex];
  }
  position.add(velocity);
  sketch.image(image, position.x, position.y);
}
});
