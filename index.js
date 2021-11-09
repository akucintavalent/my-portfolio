const project1 = document.getElementById('project1');
const projects = document.getElementById('projects');
for (let i = 0; i < 5; i += 1) {
  projects.appendChild(project1.cloneNode(true));
}