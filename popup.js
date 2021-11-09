const body = document.querySelector('body');
const popup = document.querySelector('#popup');
const closeBtn = document.querySelector('.close-btn');
const links = document.querySelectorAll('.nav-mobile-modal a');
const openBtn = document.querySelector('i.fa-bars');

function open () {
  popup.classList.toggle('invisible');
  body.style.overflow = 'hidden';
}

function close () {
  popup.classList.toggle('invisible');
  body.style.overflow = 'auto';
}

openBtn.addEventListener('click', open);
  
closeBtn.addEventListener('click', close);
  
links.forEach((link) => {
  link.addEventListener('click', close);
});
