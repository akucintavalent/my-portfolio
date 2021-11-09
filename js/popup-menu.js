const body = document.querySelector('body');
const popup = document.querySelector('#popup');
const closeBtn = document.querySelector('.close-btn');
const links = document.querySelectorAll('.nav-mobile-modal a');
const openBtn = document.querySelector('i.fa-bars');

function openMenu() {
  popup.classList.toggle('invisible');
  body.style.overflow = 'hidden';
}

function closeMenu() {
  popup.classList.toggle('invisible');
  body.style.overflow = 'auto';
}

openBtn.addEventListener('click', openMenu);

closeBtn.addEventListener('click', closeMenu);

links.forEach((link) => {
  link.addEventListener('click', closeMenu);
});
