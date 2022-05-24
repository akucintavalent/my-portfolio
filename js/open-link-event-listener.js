import projects from './projects-info.js';

projects.reverse();

export default {
  openLiveLinkFuncs: projects.map((project) => () => {
    window.open(project.liveLink);
  }),
  openSourceLinkFuncs: projects.map((project) => () => {
    window.open(project.sourceLink);
  }),
};
