'use strict';

function generateMultiplicationTable() {
  const numberInput = document.getElementById('number').value;
  const number = parseInt(numberInput);

  if (isNaN(number) || number <= 0) {
    alert('Please enter a valid positive integer.');
    return;
  }

  let tableHTML = '<table>';

  for (let i = 1; i <= number; i++) {
    tableHTML += '<tr>';
    for (let j = 1; j <= number; j++) {
      tableHTML += `<td>${i * j}</td>`;
    }
    tableHTML += '</tr>';
  }

  tableHTML += '</table>';

  document.getElementById('table-container').innerHTML = tableHTML;
}
