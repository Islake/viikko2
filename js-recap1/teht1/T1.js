'use strict';

function convertTemperature() {
  const celsius = parseFloat(prompt('Enter Celsius Temperature'));

  if (isNaN(celsius)) {
    alert('Please enter a valid number for Celsius temperature.');
    return;
  }

  const fahrenheit = (celsius * 9) / 5 + 32;
  const kelvin = celsius + 273.15;

  document.getElementById('celsius').textContent =
    'Celsius: ' + celsius.toFixed(2);
  document.getElementById('fahrenheit').textContent =
    'Fahrenheit: ' + fahrenheit.toFixed(2);
  document.getElementById('kelvin').textContent =
    'Kelvin: ' + kelvin.toFixed(2);
}
