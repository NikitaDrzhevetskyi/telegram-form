//TG
const tg = window.Telegram.WebApp;
tg.expand();

//Variables
let inputs = document.querySelectorAll('.form input, .form select, .form textarea');
let errorDiv = document.getElementById('error-message');
let button = document.querySelector('.submit-button');

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
      input.style.border = '2px solid rgb(220, 20, 20)';
    });
  }
  window.scrollTo(0, 0);
}

function getFormData() {}

//eventListener
inputs.forEach(function (input) {
  input.addEventListener('input', function () {
    if (this.value.trim() !== '') {
      this.style.border = '';
    }
  });
});

function getFormData() {
  let formData = {};

  formData.district = document.getElementById('district').value;
  formData.price = document.getElementById('price').value;
  formData.currency = document.getElementById('currency').value;
  formData.description = document.getElementById('description').value;
  formData.room_number = document.getElementById('room_number').value;
  formData.area = document.getElementById('area').value;

  return formData;
}

document.addEventListener('DOMContentLoaded', function() {
	document.body.addEventListener('click', function(event) {
	  if (!event.target.closest('.form')) {
		// If the clicked element is not within the form, blur the form
		document.activeElement.blur();
	  }
	});
  });
  