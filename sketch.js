


function setup() {
  var can = createCanvas(800, 800);

  //not sure why this has to be declared in here....
  function makeGrid(s) {
    var w = can.width;
    var h = can.height;
    //Say w=100. If s=5, we want start=10, then increment by 20. If s=20, we want start=2.5, and increment by 5.
    var start = w/(s*2);

    //to be honest, not entirely sure why we need the -50:
    for (var i = start; i < can.width - 50; i += 2*start) {
      for (var j = start; j < can.height - 50; j += 2*start) {
        rect(i, j, 2*start - 1, 2*start - 1);
      }
    }
  }
  makeGrid(20);
}




function draw() {
  background(0, 150);
  fill();

}
