'use strict';

// Create an empty array called numbers
const numbers = [];

// Prompt the user to enter five numbers and add each entered number to the numbers array
for (let i = 1; i <= 5; i++) {
  const number = parseInt(prompt(`Enter Number ${i}:`));
  numbers.push(number);
}

// Display the contents of the numbers array
document.getElementById('numbers').textContent =
  'Numbers: ' + numbers.join(', ');

// Prompt the user to enter a number and check if it is included in the numbers array
const searchNumber = parseInt(prompt('Enter a Number to Search:'));
const isFound = numbers.includes(searchNumber);

// Display a message indicating whether the entered number is found or not found
if (isFound) {
  console.log(`Number ${searchNumber} is found in the array.`);
} else {
  console.log(`Number ${searchNumber} is not found in the array.`);
}

// Remove the last number from the numbers array
numbers.pop();

// Display the updated numbers array
document.getElementById('numbers').textContent +=
  '\nUpdated Numbers: ' + numbers.join(', ');

// Sort the numbers array in ascending numerical order
numbers.sort((a, b) => a - b);

// Display the sorted numbers array
document.getElementById('numbers').textContent +=
  '\nSorted Numbers: ' + numbers.join(', ');
