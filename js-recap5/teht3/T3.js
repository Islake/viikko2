'use strict'
async function makeRequest(method, url, data) {
  try {
    const response = await fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Request failed with status ' + response.status);
    }

    const responseData = response.status === 204 ? null : await response.json();
    console.log(responseData);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

const unknownUrl = 'https://reqres.in/api/unknown/23';
makeRequest('GET', unknownUrl);

const postData = {name: 'Cool name', job: 'Cool job'};
const postUrl = 'https://reqres.in/api/users';
makeRequest('POST', postUrl, postData);

const putData = {name: 'Dude', job: 'Cleaner'};
const putUrl = 'https://reqres.in/api/users/2';
makeRequest('PUT', putUrl, putData);

const deleteUrl = 'https://reqres.in/api/users/2';
makeRequest('DELETE', deleteUrl);
