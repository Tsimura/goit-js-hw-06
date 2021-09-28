// Обработка отправки формы form.login-form должна быть по
// событию submit.

// При отправке формы страница не должна перезагружаться.

// Если в форме есть незаполненные поля, выводи alert с
// предупреждением о том, что все поля должны быть заполнены.

// Если пользователь заполнил все поля и отправил форму,
// собери значения полей в обьект, где имя поля будет именем свойства,
// а значение поля - значением свойства.Для доступа к элементам
// формы используй свойство elements.

// Выведи обьект с введенными данными в консоль и очисти
// значения полей формы методом reset.
// https://youtu.be/iJq-NwbZL84?t=1669

const form = document.querySelector('.login-form');
const email = form.querySelector('input[type = "email"]');
const password = form.querySelector('input[type = "password"]');
const btnSubmit = document.querySelector('button[type = "submit"]');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  //   отмена перезагрузки браузера после отправки формы
  event.preventDefault();
  console.log(event.currentTarget);
  console.log('123');
}

console.dir(form);
console.log(email);
console.log(password);
console.log(btnSubmit);
