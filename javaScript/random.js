var update = function(coordinate){
  var offset = Math.random() * 4 -2;
  coordinate = coordinate + offset;

  if(coordinate > 400){
    coordinate = 200;
  }
  if (coordinate < 0) {
    coordinate = 0;
  }
  return coordinate;
};
