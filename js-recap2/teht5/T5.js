'use strict'
function sortArray(numbers, order) {

  const Array = numbers.slice();

  if (order === 'asc') {
    return Array.sort((a, b) => a - b);
  } else if (order === 'desc') {
    return Array.sort((a, b) => b - a);
  } else {
    console.error(
      'Invalid order parameter. Use "asc" for ascending order or "desc" for descending order.'
    );
    return numbers;
  }
}


const numbers = [5, 2, 8, 1, 9];
console.log(sortArray(numbers, 'asc')); // : [1, 2, 5, 8, 9]
console.log(sortArray(numbers, 'desc')); // : [9, 8, 5, 2, 1]
