//TG
const tg = window.Telegram.WebApp;
tg.expand();

//Variables
let inputs = document.querySelectorAll('.form input, .form select, .form textarea');
let errorDiv = document.getElementById('error-message');
let button = document.querySelector(".submit-button")
console.log(button)

//functions
function validateForm(event) {
  event.preventDefault();

  let isValid = true;
  let emptyInputs = [];

  inputs.forEach(function (input) {
    if (input.value.trim() === '') {
      isValid = false;
      emptyInputs.push(input);
    } else {
      input.style.border = '';
    }
  });

  if (isValid) {
    errorDiv.style.display = 'none';
    alert('Оголошення додано!');
  } else {
    errorDiv.style.display = 'block';
    errorDiv.innerText = 'Будь ласка, заповніть всі поля форми';

    emptyInputs.forEach(function (input) {
      input.style.border = '2px solid red';
    });
  }
}

inputs.forEach(function (input) {
  input.addEventListener('input', function () {
    if (this.value.trim() !== '') {
      this.style.border = '';
    }
  });
});
