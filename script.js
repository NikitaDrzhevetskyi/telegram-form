// TG
const tg = window.Telegram.WebApp;

// Variables
const inputs = document.querySelectorAll('.form input, .form select, .form textarea');
const errorDiv = document.getElementById('error-message');
const button = document.querySelector('.submit-button');

// Functions
function validateForm(event) {
  event.preventDefault();

  let isValid = true;
  const emptyInputs = [];

  inputs.forEach((input) => {
    if (input.value.trim() === '') {
      isValid = false;
      emptyInputs.push(input);
    } else {
      input.style.border = '';
    }
  });

  if (isValid) {
    errorDiv.style.display = 'none';
    tg.close();
  } else {
    errorDiv.style.display = 'block';
    errorDiv.innerText = 'Будь ласка, заповніть всі поля форми';

    emptyInputs.forEach((input) => {
      input.style.border = '2px solid rgb(220, 20, 20)';
    });
  }
  window.scrollTo(0, 0);
}

function getFormData() {
  return {
    district: document.getElementById('district').value,
    price: document.getElementById('price').value,
    currency: document.getElementById('currency').value,
    description: document.getElementById('description').value,
    room_number: document.getElementById('room_number').value,
    area: document.getElementById('area').value,
  };
}

// Event Listeners
button.addEventListener('click', () => {
  const formData = getFormData();
  const jsonData = JSON.stringify(formData);
  console.log(jsonData);
});

inputs.forEach((input) => {
  input.addEventListener('input', function () {
    if (this.value.trim() !== '') {
      this.style.border = '';
    }
  });
});

document.body.addEventListener('click', (event) => {
  if (!event.target.closest('.form')) {
    document.activeElement.blur();
  }
});
