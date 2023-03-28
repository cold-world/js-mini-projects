//Elements
const form = document.querySelector('form');
const inputList = document.querySelectorAll('input');
const modal = document.querySelector('.modal-success');

//Logic
const addInputStyle = (input, type) => {
  if (type === 'invalid') input.style.border = '2px solid #e74c3c';
  if (type === 'valid') input.style.border = '2px solid #2ecc71';
};

const addErrorMessage = (input, errorMessage) => {
  const message = document.createElement('span');
  message.textContent = errorMessage;

  if (input.id === 'userName') {
    input.insertAdjacentElement('afterend', message);
  }
  if (input.id === 'email') {
    input.insertAdjacentElement('afterend', message);
  }
  if (input.id === 'password') {
    input.insertAdjacentElement('afterend', message);
  }
  if (input.id === 'confirm-password') {
    input.insertAdjacentElement('afterend', message);
  }
};

const clearInputs = (inputList) => {
  inputList.forEach((input) => {
    const errorMessage = input.nextElementSibling;
    if (errorMessage && errorMessage.tagName === 'SPAN') {
      errorMessage.remove();
    }
    addInputStyle(input, null);
  });
};

const validateInputs = (inputList) => {
  let isValid = true;
  let password = '';
  let confirmPassword = '';

  clearInputs(inputList);

  inputList.forEach((input) => {
    if (input.value.trim() === '') {
      addInputStyle(input, 'invalid');
      addErrorMessage(input, `${input.id} is required`);
      isValid = false;
      return;
    }
    if (input.id === 'userName' && input.value.length < 3) {
      addInputStyle(input, 'invalid');
      addErrorMessage(input, 'Username must be at least 3 characters');
      isValid = false;
      return;
    }
    if (input.id === 'email' && !input.value.includes('@')) {
      addInputStyle(input, 'invalid');
      addErrorMessage(input, 'Wrong email address');
      isValid = false;
      return;
    }
    if (input.id === 'password' && input.value.length < 6) {
      addInputStyle(input, 'invalid');
      addErrorMessage(input, 'Password must be at least 6 characters');
      isValid = false;
      password = '';
      confirmPassword = '';
      return;
    }
    if (input.id === 'password') {
      password = input.value;
    }
    if (input.id === 'confirm-password') {
      confirmPassword = input.value;
      if (password !== confirmPassword) {
        addInputStyle(input, 'invalid');
        addErrorMessage(input, 'Passwords do not match');
        isValid = false;
        return;
      }
    }
    addInputStyle(input, 'valid');
  });
  return isValid;
};

//Event
form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (!validateInputs(inputList)) {
    return;
  } else {
    form.classList.add('disable');
    modal.classList.remove('disable');
  }
});
