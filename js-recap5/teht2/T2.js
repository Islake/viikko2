async function postData() {
  const url = 'https://reqres.in/api/users';
  const data = {
    name: 'cool name',
    job: 'cool job',
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();
    console.log(responseData);
  } catch (error) {
    console.error('Error posting data:', error);
  }
}

postData();
