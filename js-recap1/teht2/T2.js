'use strict';

function calculate() {
  const point1Input = document.getElementById('point1').value;
  const point2Input = document.getElementById('point2').value;

  const point1Coordinates = point1Input
    .split(',')
    .map((coord) => parseFloat(coord.trim()));
  const point2Coordinates = point2Input
    .split(',')
    .map((coord) => parseFloat(coord.trim()));

  if (
    point1Coordinates.length !== 2 ||
    point2Coordinates.length !== 2 ||
    isNaN(point1Coordinates[0]) ||
    isNaN(point1Coordinates[1]) ||
    isNaN(point2Coordinates[0]) ||
    isNaN(point2Coordinates[1])
  ) {
    alert('Please enter coordinates in the correct format: "x,y"');
    return;
  }

  const x1 = point1Coordinates[0];
  const y1 = point1Coordinates[1];
  const x2 = point2Coordinates[0];
  const y2 = point2Coordinates[1];

  const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  
  document.getElementById('distance').textContent =
    'Distance between the points: ' + distance.toFixed(2);
}
