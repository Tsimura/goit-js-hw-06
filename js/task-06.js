const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('focus', onInputFocus);
inputEl.addEventListener('blur', onInputBlur);
inputEl.addEventListener('input', onInput);

function onInputFocus() {
  console.log('input в стані "focus"');
}

function onInputBlur() {
  console.log('input в стані "blur"');
}

function onInput(event) {
  if (this.value.length == this.getAttribute('data-length')) {
    this.classList.add('valid');
    this.classList.remove('invalid');
    console.log('Вірна умова! Продовжуємо.');
  } else {
    this.classList.add('invalid');
    this.classList.remove('valid');
    console.log('Не вірна умова! кількість символів 6.');
  }
}
