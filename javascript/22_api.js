const request = new XMLHttpRequest();

request.open('GET', 'https://jsonplaceholder.typicode.com/users/1', true);
request.responseType = 'json';

request.onload = function() {
  const data = this.response;
  console.log(data);
};

request.send();


// ----- fetch -----
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
