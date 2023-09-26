const img = document.querySelector('img');
const searchField = document.getElementById('search');
const form = document.querySelector('form');

let apiKey = '';

const fetchImg = async (thing) => {
  if (p) {
    p.remove();
  }
  const baseUrl = 'https://api.giphy.com/v1/gifs/translate?api_key=';
  const fullUrl = baseUrl + apiKey + '&s=' + thing;
  img.classList.add('loading');
  img.src = 'load.gif';
  const response = await fetch(fullUrl, {mode: 'cors'});
  response.json().then(function(response) {
    img.classList.remove('loading');
    img.src = '';
    img.src = response.data.images.original.url;
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let query = searchField.value;
  fetchImg(query);
  query = "";
});

img.classList.add('loading');

const p = document.createElement('p');
p.innerHTML = "How to use: Open the console and type:<br>apiKey = 'yourgiphyapikey'";
document.body.appendChild(p);