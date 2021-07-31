function googleSearch(query) {
  const url = 'https://google.com/search?q=';
  let fullUrl = url + query.replaceAll(' ', '+');
  window.open(fullUrl, '_self');
}

const form = document.querySelector('.search__form');
const query = document.querySelector('.search__input');
const luckyButton = document.querySelector('#lucky-button');
const searchImage = document.querySelector('.search__image');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  googleSearch(query.value);
});

let imageRotateAngle = 0;
luckyButton.addEventListener('click', () => {
  imageRotateAngle += 360;
  searchImage.style.transition = 'transform 600ms ease-in-out';
  searchImage.style.transform = `rotate(${imageRotateAngle}deg)`;
});
