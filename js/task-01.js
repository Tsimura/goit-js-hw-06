const itemEl = document.querySelector('#categories');

const itemListEl = itemEl.querySelectorAll('.item');

console.log('Number of categories: ', itemListEl.length);

const titleEl = itemEl.querySelectorAll('h2');

const itemListInUl = itemEl.querySelectorAll('ul');

for (let i = 0; i < titleEl.length; i++) {
  const category = titleEl[i].textContent;
  const elements = itemListInUl[i].querySelectorAll('li').length;
  console.log('Category: ', category);
  console.log('Elements: ', elements);
}
