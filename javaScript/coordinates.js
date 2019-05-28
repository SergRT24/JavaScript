var getRandomNumber = function(size){
  return Math.floor(Math.random() * size)
};

var getDistance = function(event, target){
  var diffX = event.offsetX - target.x;
  var diffY = event.offsetY - target.y;
  return Math.sqrt((diffX *diffX) + (diffY*diffY));
};

var getDistanceHint = function (distance) {
  if(distance < 10){
    return "3-run Homerun!";
  }
  else if(distance < 20){
    return "Homerun!";
  }
  else if(distance < 40){
    return "Triple!";
  }
  else if(distance < 80){
    return "Double";
  }
  else if(distance < 160){
    return "Single";
  }
  else if(distance < 320){
    return "Pop Fly!";
  }
  else if(distance < 400){
    return "Ground out!";
  }
  else if(distance < 500){
    return " Grounded into Double Play!";
  }
  else{
    return "Strikeout!";
  }
};
//set up variables
var width = 400;
var height = 400;
var clicks = 0;

var target = {
  x: getRandomNumber(width),
  y: getRandomNumber(height)
};
//Add a click handler to the images
$("#map").click(function(event){
  //click handler code goes here
  clicks++;

//Gets the distance between the click and the event
var distance = getDistance(event, target);
//Convert the distance to show a hint
var distanceHint = getDistanceHint(distance);
//update the distance element in html
$("#distance").text(distanceHint);

if(distance < 8){
  alert("Hit a Grand Slam in " + clicks + " clicks!");
  }
});
