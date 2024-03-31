'use strict';

const numbers = [];


let input;
do {
  input = prompt("Enter a number (or 'done' to finish):");
  if (input !== 'done') {
    const number = parseInt(input);
    if (!isNaN(number)) {
      numbers.push(number);
    } else {
      alert("Invalid input. Please enter a valid number or 'done' to finish.");
    }
  }
} while (input !== 'done');


let evenNumbers = [];
for (const number of numbers) {
  if (number % 2 === 0) {
    evenNumbers.push(number);
  }
}


if (evenNumbers.length > 0) {
  document.body.innerHTML +=
    '<p>Even Numbers: ' + evenNumbers.join(', ') + '</p>';
} else {
  document.body.innerHTML += '<p>Even Numbers: None</p>';
}

document.body.innerHTML += '<p>End of Program</p>';
