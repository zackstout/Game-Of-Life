
//i is column, j is row:
//how terribly strange, it won't color the first one on the screen....:
var startingCreature = [{i: 1, j: 4}, {i: 1, j: 5}, {i: 2, j: 4}, {i: 1, j: 4}];
var start, w, h;
var s = 40;

//to keep track of which cells are alive/dead:
var gridValues = [];

function getNeighbors(x) {
    neighbors = [];
    // var R = parseInt(r);
    // var C = parseInt(c);

    console.log(x.index, x.jindex);
    // console.log(startingCreature);

    if (x.index > 0) {
      neighbors.push({i: x.index - 1, j: x.jindex});

      if (x.jindex > 0) {
        neighbors.push({i: x.index, j: x.jindex - 1});
        neighbors.push({i: x.index - 1, j: x.jindex - 1});
      }

      if (x.jindex < s - 1) {
        neighbors.push({i: x.index, j: x.jindex + 1});
        neighbors.push({i: x.index - 1, j: x.jindex + 1});
      }
    } else {
      if (x.jindex > 0) {
        neighbors.push({i: x.index, j: x.jindex - 1});
      }
      if (x.jindex < s - 1) {
        neighbors.push({i: x.index, j: x.jindex + 1});
      }
    }

    if (x.index < s - 1) {
      neighbors.push({i: x.index + 1, j: x.jindex});

      if (x.jindex > 0) {
        neighbors.push({i: x.index + 1, j: x.jindex - 1});
      }
      if (x.jindex < s - 1) {
        neighbors.push({i: x.index + 1, j: x.jindex + 1});
      }
    }
//
// //if r>0
//     if (R>0) {
//       neighbors.push({row: R-1, col: C});
//       // neighbors.push({row: r-1, col: c+1});
//       if (c>0) {
//         neighbors.push({row: R, col: C-1});
//         neighbors.push({row: R-1, col: C-1});
//       }
//       if (c < s-1) {
//         neighbors.push({row: R, col: C+1});
//         neighbors.push({row: R-1, col: C+1});
//       }
//     } else {
//       if (c>0) {
//         neighbors.push({row: R, col: C-1});
//       }
//       if (c < s-1) {
//         neighbors.push({row: R, col: C+1});
//       }
//     }
//
// //if r < s - 1
//     if (r < s-1 ) {
//       neighbors.push({row: R+1, col:C});
//
//       if (c>0) {
//         neighbors.push({row: R+1, col: C-1});
//       }
//       if (c < s-1) {
//         neighbors.push({row: R+1, col: C+1});
//       }
//     }
//
//     return neighbors;
    console.log(neighbors);
  }

function setup() {
  var can = createCanvas(800, 800);

  //not sure why this (as well as the above) has to be declared in here....
  function makeGrid(s) {
    w = can.width;
    h = can.height;
    offset = 1000/s;
    //Say w=100. If s=5, we want start=10, then increment by 20. If s=20, we want start=2.5, and increment by 5.
    start = w/(s*2);
    // console.log(start);

    //to be honest, not entirely sure why we need the -50. Well I suppose it's like going until (arr.length - 1):
    for (var i = start; i < w - offset; i += 2*start) {
      var row = [];
      for (var j = start; j < h - offset; j += 2*start) {
        rect(i, j, 2*start - 2, 2*start - 2);

        //value signifies alive (1) or dead (0):
        row.push({i: i, j: j, value: 0, index: 2*(i - start) / s, jindex: 2*(j - start) / s});
      }
      gridValues.push(row);
    }
    // console.log(gridValues);
  }

  makeGrid(s);

//Draw starting creature:
  startingCreature.forEach(function(item) {
    var xOff, yOff;
    xOff = start + item.i * 2*start;
    yOff = start + item.j * 2*start;
    rect(xOff, yOff, 2*start - 2, 2*start - 2);
    fill(0, 200);

    gridValues[item.i][item.j].value = 1;
  });

  // console.log(gridValues);

  gridValues.forEach(function(row) {
    row.forEach(function(x) {
      getNeighbors(x);
    });
  });

} //end SETUP






function draw() {
  background(0, 50);
  fill();

} //end DRAW
