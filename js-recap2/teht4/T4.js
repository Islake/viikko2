'use strict'
function sortArray(numbers) {

  const sortedArray = numbers.slice().sort((a, b) => a - b);
  return sortedArray;
}


const numbers = [5, 2, 8, 1, 9];
console.log('Original Array:', numbers);

const sortedNumbers = sortArray(numbers);
console.log('Sorted Array:', sortedNumbers);
