function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnEl = document.querySelector('.change-color');
const colorValue = document.querySelector('.color');

console.log(btnEl);
console.log(colorValue);

btnEl.addEventListener('click', function () {
  document.body.style.background = `${getRandomHexColor()}`;
  colorValue.textContent = `${getRandomHexColor()}`;
});
