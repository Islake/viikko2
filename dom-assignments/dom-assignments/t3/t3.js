'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const targetElement = document.getElementById('target');

  const browserInfo = `${navigator.appName}, ${navigator.appVersion}`;
  appendToTarget(targetElement, browserInfo);

  const osInfo = navigator.platform;
  appendToTarget(targetElement, osInfo);

  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  const screenInfo = `Screen width: ${screenWidth}, Screen height: ${screenHeight}`;
  appendToTarget(targetElement, screenInfo);

  const availableScreenWidth = window.screen.availWidth;
  const availableScreenHeight = window.screen.availHeight;
  const availableScreenInfo = `Available screen width: ${availableScreenWidth}, Available screen height: ${availableScreenHeight}`;
  appendToTarget(targetElement, availableScreenInfo);
  
  const currentDate = new Date().toLocaleDateString('fi-FI', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const currentTime = new Date().toLocaleTimeString('fi-FI', {
    hour: '2-digit',
    minute: '2-digit',
  });
  const dateTimeInfo = `${currentDate} ${currentTime}`;
  appendToTarget(targetElement, dateTimeInfo);
});

function appendToTarget(targetElement, content) {
  const paragraph = document.createElement('p');
  paragraph.textContent = content;
  targetElement.appendChild(paragraph);
}
