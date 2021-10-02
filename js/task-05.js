const inputEl = document.querySelector('input#name-input');
const titleEl = document.querySelector('span#name-output');

inputEl.addEventListener('input', onFormSubmit);

function onFormSubmit(event) {
  if (event.currentTarget.value != '') {
    titleEl.textContent = event.currentTarget.value;
  } else titleEl.textContent = 'Anonymous';
}

// console.log(inputEl);
// console.log(titleEl);
