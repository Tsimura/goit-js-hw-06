const form = document.querySelector('.login-form');
const emailEl = form.querySelector('input[type = "email"]');
const passwordEl = form.querySelector('input[type = "password"]');
const btnSubmitEl = form.querySelector('button[type = "submit"]');

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

// function onFormSubmit(event) {
//   event.preventDefault();

//   // console.dir(event.currentTarget.elements);
//   const formElement = event.currentTarget.elements;
//   const email = formElement.email.value;
//   const password = formElement.password.value;

//   // console.log('email: ', email, 'password: ', password);

//   const formData = { email, password };
//   console.log(formData);
// }

//Варіант 3: при необхідності вивести alert

function onFormSubmit(event) {
  event.preventDefault();

  const formElement = event.currentTarget.elements;
  const email = formElement.email.value;
  const password = formElement.password.value;
  const formData = { email, password };

  email == '' || password == ''
    ? alert('Всі поля повинні бути заповнені!')
    : console.log(formData);

  form.reset();
}
