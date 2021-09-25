// переробити костилі через map

const itemEl = document.querySelector('#categories');

const itemListEl = itemEl.querySelectorAll('.item');
console.log('Number of categories: ', itemListEl.length);

const titleEl = itemEl.querySelectorAll('h2');

const itemListInUl = itemEl.querySelectorAll('ul');

console.log('Category: ', titleEl[0].textContent);
console.log('Elements: ', itemListInUl[0].querySelectorAll('li').length);

console.log('Category: ', titleEl[1].textContent);
console.log('Elements: ', itemListInUl[1].querySelectorAll('li').length);

console.log('Category: ', titleEl[2].textContent);
console.log('Elements: ', itemListInUl[2].querySelectorAll('li').length);
