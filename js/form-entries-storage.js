const inputNameMobile = document.querySelector('#name-mobile');
const inputEmailMobile = document.querySelector('#email-mobile');
const inputMessageMobile = inputNameMobile.parentNode.querySelector('textarea');
const inputNameDesktop = document.querySelector('#name-desktop');
const inputEmailDesktop = document.querySelector('#email-desktop');
const inputMessageDesktop = inputNameDesktop.parentNode.querySelector('textarea');

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
    if (!isHidden(inputNameDesktop.parentNode)) {
      const formData = {
        name: inputNameDesktop.value,
        email: inputEmailDesktop.value,
        message: inputMessageDesktop.value,
      };
      const formDataStr = JSON.stringify(formData);
      localStorage.setItem('formData', formDataStr);
    }
    if (!isHidden(inputNameMobile.parentNode)) {
      const formData = {
        name: inputNameMobile.value,
        email: inputEmailMobile.value,
        message: inputMessageMobile.value,
      };
      const formDataStr = JSON.stringify(formData);
      localStorage.setItem('formData', formDataStr);
    }
  }
}

inputNameMobile.onchange = populateStorage;
inputEmailMobile.onchange = populateStorage;
inputMessageMobile.onchange = populateStorage;
inputNameMobile.onkeyup = populateStorage;
inputEmailMobile.onkeyup = populateStorage;
inputMessageMobile.onkeyup = populateStorage;

inputNameDesktop.onchange = populateStorage;
inputEmailDesktop.onchange = populateStorage;
inputMessageDesktop.onchange = populateStorage;
inputNameDesktop.onkeyup = populateStorage;
inputEmailDesktop.onkeyup = populateStorage;
inputMessageDesktop.onkeyup = populateStorage;