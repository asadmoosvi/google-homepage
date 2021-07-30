function googleSearch(query) {
  const url = 'https://google.com/search?q=';
  let fullUrl = url + query.replaceAll(' ', '+');
  window.open(fullUrl, '_self');
}

const form = document.querySelector('.search__form');
const query = document.querySelector('.search__input');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  googleSearch(query.value);
});
