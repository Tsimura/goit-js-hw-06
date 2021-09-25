const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Варіант 1

// const ingredientEl = [];

// for (let i = 0; i < ingredients.length; i += 1) {
//   const option = ingredients[i];
//   const linkEl = document.createElement('li');

//   linkEl.classList.add('item');
//   linkEl.textContent = option;

//   ingredientEl.push(linkEl);
// }

// const listEl = document.querySelector('#ingredients');
// listEl.append(...ingredientEl);

// Варіант 2
// const listEl = document.querySelector('#ingredients');

// const ingredientEl = ingredients.map(option => {
//   const linkEl = document.createElement('li');

//   linkEl.classList.add('item');
//   linkEl.textContent = option;
//   return linkEl;
// });
// // console.log(ingredientEl);

// listEl.append(...ingredientEl);

// Варіант 3

const listEl = document.querySelector('#ingredients');

const makeList = options => {
  return options.map(option => {
    const linkEl = document.createElement('li');
    linkEl.classList.add('item');
    linkEl.textContent = option;
    return linkEl;
  });
};

const ingredientEl = makeList(ingredients);
listEl.append(...ingredientEl);
