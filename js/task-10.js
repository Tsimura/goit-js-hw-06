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
  const element = document.createDocumentFragment();
  for (let i = 0; i < amountValue; i += 1) {
    const sizeEl = startSize + i * 10;
    const divArrEl = document.createElement('div');

    const bgColor = getRandomHexColor();
    // console.log(bgColor);

    // divArrEl.style.cssText = `width: ${sizeEl}px; height: ${sizeEl}px; background-color: ${getRandomHexColor()} `;

    // розібратся чому так!!!
    // divArrEl.setAttribute('style', `background-color: ${bgColor}`);

    divArrEl.style.cssText = `width: ${sizeEl}px; height: ${sizeEl}px; `;

    divArrEl.style.backgroundColor = `${getRandomHexColor()}`;

    console.log('Колір HEX: ', getRandomHexColor());
    console.log(divArrEl.style.cssText);
    console.log(divArrEl.style.backgroundColor);

    element.appendChild(divArrEl);
  }
  divBoxesEl.appendChild(element);
}

function destroyBoxes() {
  divBoxesEl.innerHTML = '';
}
