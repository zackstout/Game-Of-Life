
//i is column, j is row:
//how terribly strange, it won't color the first one on the screen....:
var startingCreature = [{i: 1, j: 4}, {i: 1, j: 5}, {i: 2, j: 4}, {i: 1, j: 4}];
var start, w, h;

function setup() {
  var can = createCanvas(800, 800);

  //not sure why this has to be declared in here....
  function makeGrid(s) {
    w = can.width;
    h = can.height;
    //Say w=100. If s=5, we want start=10, then increment by 20. If s=20, we want start=2.5, and increment by 5.
    start = w/(s*2);
    console.log(start);

    //to be honest, not entirely sure why we need the -50:
    for (var i = start; i < w - 50; i += 2*start) {
      for (var j = start; j < h - 50; j += 2*start) {
        rect(i, j, 2*start - 1, 2*start - 1);
        // fill(0, 200);
      }
    }
  }

  makeGrid(20);


  startingCreature.forEach(function(item) {
    var xOff, yOff;
    xOff = start + item.i * 2*start;
    yOff = start + item.j * 2*start;
    rect(xOff, yOff, 2*start - 1, 2*start - 1);
    fill(0, 200);
  });


}


function draw() {
  background(0, 50);
  fill();

}
