const inputEl = document.querySelector('#font-size-control');
const titleEl = document.querySelector('#text');
let valueSize = 0;

inputEl.addEventListener('change', valueInput);

function valueInput() {
  valueSize = titleEl.style.fontSize = `${this.value}px`;
  //   console.log('Значение:', this.value);
}
