const emailMobile = document.querySelector('#email-mobile');
const emailDesktop = document.querySelector('#email-desktop');

function emailValidate(event) {
  const email = event.target;
  if (email.validity.patternMismatch) {
    email.setCustomValidity('Email must not contain uppercase characters');
  } else {
    email.setCustomValidity('');
  }
}

emailMobile.addEventListener('input', emailValidate);
emailDesktop.addEventListener('input', emailValidate);