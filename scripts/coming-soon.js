import { validateEmail } from './utils/validate.js';

const emailInputElement = document.querySelector('.js-email-input');
const submitButtonElement = document.querySelector('.js-submit-button');

function validateForm(e) {
  e.preventDefault();

  const emailInputValue = emailInputElement.value;

  if (!validateEmail(emailInputValue)) {
    emailInputElement.parentElement.classList.add('coming-soon__email-input-container-invalid');
    emailInputElement.classList.add('coming-soon__email-input-invalid');
    emailInputElement.setAttribute('aria-label', 'Please provide a valid email address');
    return;
  }

  emailInputElement.parentElement.classList.remove('coming-soon__email-input-container-invalid');
  emailInputElement.classList.remove('coming-soon__email-input-invalid');
  emailInputElement.removeAttribute('aria-label');
  
  // Logic to submit the form
}

submitButtonElement.addEventListener('click', (e) => validateForm(e));
emailInputElement.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') validateForm(e);
});