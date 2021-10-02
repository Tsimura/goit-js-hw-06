function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// const divEl = document.querySelector('#controls');
const inputEl = document.querySelector('input');
const createEl = document.querySelector('[data-create]');
const destroyEl = document.querySelector('[data-destroy]');
const divBoxesEl = document.querySelector('#boxes');

let startSizeBox = 20;

inputEl.addEventListener('input', createValueInput);
createEl.addEventListener('click', createBoxes);
destroyEl.addEventListener('click', destroyBoxes);

function createValueInput(element) {
  inputEl.setAttribute('counter', Number(element.currentTarget.value));
  // console.log(Number(element.currentTarget.value));
}

function createBoxes() {
  let counterBoxes = Number(inputEl.getAttribute('counter'));
  for (let i = 0; i < counterBoxes; i += 1) {
    startSizeBox += 10;
    const divEl = document.createElement('div');

    divEl.style.cssText = `width: ${startSizeBox}px; height: ${startSizeBox}px; background-color: ${getRandomHexColor()} `;
    divEl.style.margin = '5px';

    divEl.classList.add('created-element');

    divBoxesEl.style.display = 'flex';
    divBoxesEl.style.alignItems = 'center';
    divBoxesEl.style.flexDirection = 'column';

    divBoxesEl.appendChild(divEl);

    inputEl.value = '';
  }
}

function destroyBoxes() {
  divBoxesEl.innerHTML = '';
}
