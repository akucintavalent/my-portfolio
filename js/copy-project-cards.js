import projects from './projects-info.js';

projects.reverse();

const projectEl = document.getElementById('project1');
const projectsEl = document.getElementById('projects');
const body1 = document.querySelector('body');
const projectPopup = document.querySelector('.project-popup');
function openProjectCard() {
  projectPopup.classList.toggle('invisible');
  body1.style.overflow = 'hidden';
}

function closeProjectCard() {
  projectPopup.classList.toggle('invisible');
  body1.style.overflow = 'auto';
}
for (let i = 0; i < projects.length; i += 1) {
  // clone project card html
  const projectElClone = projectEl.cloneNode(true);
  // set the image of the project card
  const img = projectElClone.querySelector('.project-image');
  img.setAttribute('src', projects[i].imageSrc);
  // set the title of the project card
  const title = projectElClone.querySelector('h3');
  title.innerText = projects[i].title;
  // set the tags of the project card
  const technologies = projectElClone.querySelector('.technologies');
  const tech = projectElClone.querySelector('.tech');
  for (let j = 0; j < projects[i].tags.length; j += 1) {
    const techClone = tech.cloneNode(true);
    techClone.innerText = projects[i].tags[j];
    technologies.appendChild(techClone);
  }
  tech.remove();

  // set behavior of the button of the project card
  const button = projectElClone.querySelector('.see-project-button');
  button.addEventListener('click', () => {
    // set the image of the project popup card
    const bigImgs = projectPopup.querySelectorAll('.project-images img');
    bigImgs.forEach((bigImg) => {
      bigImg.setAttribute('src', projects[i].imageSrc);
    });
    // set the title of the project popup card
    const bigTitle = projectPopup.querySelector('.project-title');
    bigTitle.innerText = projects[i].title;
    // set the text of the project popup card
    const text = projectPopup.querySelector('.project-description-text');
    text.innerText = projects[i].text;
    // set the tags of the project popup card
    const bigTechnologies = projectPopup.querySelector('.technologies');
    const bigTech = projectPopup.querySelector('.tech');
    bigTechnologies.innerHTML = '';
    for (let j = 0; j < projects[i].tags.length; j += 1) {
      const techClone = bigTech.cloneNode(true);
      techClone.innerText = projects[i].tags[j];
      bigTechnologies.appendChild(techClone);
    }
    bigTech.remove();
    // set bahavior of the see live button
    const liveButton = projectPopup.querySelector('#live-button .see-project-button');
    if (projects[i].liveLink) {
      liveButton.addEventListener('click', () => {
        window.open(projects[i].liveLink);
      });
    } else {
      liveButton.remove();
    }
    // set behavior of the see source button
    const sourceButton = projectPopup.querySelector('#source-button .see-project-button');
    sourceButton.addEventListener('click', () => {
      window.open(projects[i].sourceLink);
    });
    openProjectCard();
  });
  projectsEl.appendChild(projectElClone);
}
projectEl.remove();
const closeProjectButton = document.querySelector('.project-close-btn');
closeProjectButton.addEventListener('click', closeProjectCard);