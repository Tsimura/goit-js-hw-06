const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const listEl = document.querySelector('ul');
listEl.style.display = 'flex';
listEl.style.justifyContent = 'space-around';
// console.log(listEl);

const imageEl = document.createElement('img');
// console.log(imageEl);

imageEl.src = images[0].url;
imageEl.alt = images[0].alt;
// console.log(imageEl);

const markup = images
  .map(image => `<img src=${image.url} alt=${image.alt} width = 320>`)
  .join('');

// console.log(markup);
listEl.insertAdjacentHTML('afterbegin', markup);
