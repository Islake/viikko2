'use strict';

const side1 = parseFloat(
  prompt('Enter the length of the first side of the triangle')
);
const side2 = parseFloat(
  prompt('Enter the length of the second side of the triangle')
);
const side3 = parseFloat(
  prompt('Enter the length of the third side of the triangle')
);
if (
  isNaN(side1) ||
  isNaN(side2) ||
  isNaN(side3) ||
  side1 <= 0 ||
  side2 <= 0 ||
  side3 <= 0
) {
  document.body.innerHTML =
    '<h1>Invalid input. Please enter valid positive numbers for the side lengths.</h1>';
} else {
  if (side1 === side2 && side2 === side3) {
    document.body.innerHTML = '<h1>Equilateral Triangle</h1>';
  } else if (side1 === side2 || side1 === side3 || side2 === side3) {
    document.body.innerHTML = '<h1>Isosceles Triangle</h1>';
  } else {
    document.body.innerHTML = '<h1>Scalene Triangle</h1>';
  }
}
