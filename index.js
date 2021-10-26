let project1 = document.getElementById("project1");
let projects = document.getElementById("projects");
for (let i = 0; i < 5; i++) {
    projects.appendChild(project1.cloneNode(true));
}