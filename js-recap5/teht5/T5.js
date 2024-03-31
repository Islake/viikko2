'use strict';

const restaurantEndpoint = 'https://10.120.32.94/restaurant/';

function ajaxGet(url, callback, errorCallback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        callback(response);
      } else {
        errorCallback(xhr.statusText);
      }
    }
  };
  xhr.onerror = function () {
    errorCallback(xhr.statusText);
  };
  xhr.send();
}

ajaxGet(
  restaurantEndpoint,
  function (restaurants) {
    displayRestaurants(restaurants);
  },
  function (error) {
    console.error('Error fetching restaurants:', error);
  }
);

function displayRestaurants(restaurants) {
  const restaurantsContainer = document.getElementById('restaurants');
  restaurants.forEach(function (restaurant) {
    const restaurantElement = document.createElement('div');
    restaurantElement.className = 'restaurant';
    restaurantElement.textContent = restaurant.name;
    restaurantElement.addEventListener('click', function () {
      fetchAndDisplayMenu(restaurant._id);
    });
    restaurantsContainer.appendChild(restaurantElement);
  });
}

function fetchAndDisplayMenu(restaurantId) {
  const menuEndpoint = `https://10.120.32.94/menu?restaurantId=${restaurantId}`;
  ajaxGet(
    menuEndpoint,
    function (menu) {
      displayMenu(menu);
    },
    function (error) {
      console.error('Error fetching menu:', error);
    }
  );
}

function displayMenu(menu) {
  const menuContainer = document.getElementById('menu');
  menuContainer.innerHTML = '';
  menu.forEach(function (item) {
    const menuItem = document.createElement('div');
    menuItem.className = 'menu-item';
    menuItem.textContent = item.name;
    menuContainer.appendChild(menuItem);
  });
}

const modal = document.getElementById('restaurantModal');
const span = document.querySelector('.close');

span.addEventListener('click', function () {
  modal.style.display = 'none';
});

window.addEventListener('click', function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});

function showModal(restaurant) {
  const detailsContainer = document.getElementById('restaurantDetails');
  detailsContainer.innerHTML = '';
  detailsContainer.innerHTML += '<p>Name: ' + restaurant.name + '</p>';
  detailsContainer.innerHTML += '<p>Address: ' + restaurant.address + '</p>';
  modal.style.display = 'block';
}
