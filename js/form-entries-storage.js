const inputNameMobile = document.querySelector('name-mobile');
const inputEmailMobile = document.querySelector('email-mobile');
const inputMessageMobile = document.querySelector('message-mobile');

const inputNameDesktop = document.querySelector('name-desktop');
const inputEmailDesktop = document.querySelector('email-desktop');
const inputMessageDesktop = document.querySelector('message-desktop');

function storageAvailable(type = 'localStorage') {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return e instanceof DOMException && (
      // everything except Firefox
      e.code === 22
      // Firefox
      || e.code === 1014
      // test name field too, because code might not be present
      // everything except Firefox
      || e.name === 'QuotaExceededError'
      // Firefox
      || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
      // acknowledge QuotaExceededError only if there's something already stored
      && (storage && storage.length !== 0);
  }
}

if (storageAvailable() && localStorage.getItem('formData')) {
  const formData = JSON.parse(localStorage.getItem('formData'));
  inputNameMobile.value = formData.name;
  inputEmailMobile.value = formData.email;
  inputMessageMobile.value = formData.message;

  inputNameDesktop.value = formData.name;
  inputEmailDesktop.value = formData.email;
  inputMessageDesktop.value = formData.message;
}

function isHidden(el) {
  const style = window.getComputedStyle(el);
  return style.display === 'none';
}

function populateStorage() {
  if (storageAvailable()) {
    if (!isHidden(inputNameDesktop)) {
      const formData = {
        name: inputNameDesktop.value,
        email: inputEmailDesktop.value,
        msg: inputMessageDesktop.value,
      };
      const formDataStr = JSON.stringify(formData);
      localStorage.setItem('formData', formDataStr);
    }
    if (!isHidden(inputNameMobile)) {
      const formData = {
        name: inputNameMobile.value,
        email: inputEmailMobile.value,
        msg: inputMessageMobile.value,
      };
      const formDataStr = JSON.stringify(formData);
      localStorage.setItem('formData', formDataStr);
    }
  }
}
