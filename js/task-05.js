const inputEl = document.querySelector('input#name-input');
const titleEl = document.querySelector('span#name-output');

// titleEl.textContent = 'Anonymous';

inputEl.addEventListener('input', onFormSubmit);

function onFormSubmit(event) {
  titleEl.textContent = event.currentTarget.value;
}

// console.log(inputEl);
// console.log(titleEl);
