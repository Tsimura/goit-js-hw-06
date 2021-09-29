// https://youtu.be/iJq-NwbZL84?t=1669

const form = document.querySelector('.login-form');
const email = form.querySelector('input[type = "email"]');
const password = form.querySelector('input[type = "password"]');
const btnSubmit = form.querySelector('button[type = "submit"]');

form.addEventListener('submit', onFormSubmit);

// Варіант 1: Збирає значення і виводить в консоль

// function onFormSubmit(event) {
//   event.preventDefault();
//   const formData = new FormData(event.currentTarget);
//   formData.forEach((value, name) => {
//     console.log('name: ', name);
//     console.log('value: ', value);
//   });
// }

//Варіант 2: при необхідності звернутись до значення

function onFormSubmit(event) {
  // отмена перезагрузки браузера после отправки формы:
  event.preventDefault();

  // console.dir(event.currentTarget.elements);
  const formElement = event.currentTarget.elements;
  const email = formElement.email.value;
  const password = formElement.password.value;

  // console.log('email: ', email, 'password: ', password);

  const formData = { email, password };
  console.log(formData);
}

// console.dir(form);
// console.log(email);
// console.log(password);
// console.log(btnSubmit);
