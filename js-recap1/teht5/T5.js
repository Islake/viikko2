'use strict';

function calculateSum() {
  const numberInput = document.getElementById('number').value;
  const number = parseInt(numberInput);

  let sum = 0;

  if (isNaN(number) || number <= 0) {
    document.getElementById('result').textContent =
      'Please enter a valid positive integer.';
    return;
  }

  for (let i = 1; i <= number; i++) {
    sum += i;
  }

  document.getElementById(
    'result'
  ).textContent = `The sum of natural numbers up to ${number} is: ${sum}`;
}
