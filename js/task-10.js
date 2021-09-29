// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция.При нажатии на кнопку Очистить,
// коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр - число.
// Функция создает столько < div >, сколько указано в amount и добавляет их в
// div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX.
// Используй готовую функцию getRandomHexColor для получения цвета.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const divEl = document.querySelector('#controls');
const inputEl = document.querySelector('input');
const valueCreateEl = divEl.querySelector('[data-create]');
const valueDestroyEl = divEl.querySelector('[data-destroy]');

console.log(divEl);
console.log(inputEl);
console.log(valueCreateEl);
console.log(valueDestroyEl);

inputEl.addEventListener('click', createBoxes);

function createBoxes(amount) {
  amount = inputEl.value;

  console.log(amount);
}
