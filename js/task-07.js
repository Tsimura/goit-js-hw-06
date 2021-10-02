const inputEl = document.querySelector('#font-size-control');
const titleEl = document.querySelector('#text');

titleEl.style.fontSize = `${inputEl.value}px`;
// console.log(inputEl.value);

inputEl.addEventListener('input', valueInput);

function valueInput() {
  titleEl.style.fontSize = `${this.value}px`;
  // console.log('Значение:', this.value);
}
