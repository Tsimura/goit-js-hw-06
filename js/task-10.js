function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// const divEl = document.querySelector('#controls');
const inputEl = document.querySelector('input');
const valueCreateEl = document.querySelector('[data-create]');
const valueDestroyEl = document.querySelector('[data-destroy]');
const divBoxesEl = document.querySelector('#boxes');

valueCreateEl.addEventListener('click', createValueInput);
valueDestroyEl.addEventListener('click', destroyBoxes);

function createValueInput() {
  const amountValue = inputEl.value;
  console.log(amountValue);
  createBoxes(amountValue);
}

function createBoxes(amountValue) {
  const startSize = 30;
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amountValue; i += 1) {
    const size = startSize + i * 10;
    const divArrEl = document.createElement('div');

    divArrEl.style.cssText = `width: ${size}px; height: ${size}px; background-color: #(${getRandomHexColor()}) `;

    // розібратся чому так!!!
    // divArrEl.style.cssText = `width: ${size}px; height: ${size}px `;
    // divArrEl.style.backgroundColor = ` #(${getRandomHexColor()})`;

    console.log(getRandomHexColor());
    console.log(divArrEl.style.cssText);

    fragment.appendChild(divArrEl);
  }
  divBoxesEl.appendChild(fragment);
}

function destroyBoxes() {
  divBoxesEl.innerHTML = '';
}
