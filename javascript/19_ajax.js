const form = document.querySelector('form');
const result = document.querySelector('#result');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const xhr = new XMLHttpRequest();
  // xhr.open('GET', '/api/hello');
  xhr.open('GET', '/index.html');
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        result.textContent = xhr.responseText;
      } else {
        console.error(xhr.statusText);
      }
    }
  };
  xhr.send();
});