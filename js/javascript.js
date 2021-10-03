// selectors
const nav = document.querySelectorAll("nav");
const banner = document.querySelector(".banner");
const movingArea = document.querySelector(".moving-area");
const imgAvatar = document.querySelector(".img-avatar");
const projects = document.querySelector(".projects");
//nav

//banner
banner.addEventListener("mouseout", function (e) {
  imgAvatar.style.clipPath = `circle(40% at 50% 50%)`;
});
banner.addEventListener("mouseover", function (e) {
  imgAvatar.style.clipPath = `circle(45% at 50% 50%)`;
});

//projects
projects.addEventListener("mouseover", function (e) {
  if (e.target.classList.contains("project-img")) {
    e.target.classList.add("project-img-in-sh");
    e.target.classList.remove("project-img-out-sh");
  }
});

projects.addEventListener("mouseout", function (e) {
  if (e.target.classList.contains("project-img")) {
    e.target.classList.remove("project-img-in-sh");
    e.target.classList.add("project-img-out-sh");
  }
});

const projectObserv = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;
  /*   document.querySelectorAll(".row").forEach((row) => {
    row.classList.remove("projects-ul-hidden");
  }); */
  entry.target.classList.remove("projects-ul-hidden");
  observer.unobserve(entry.target);
};

const projectsObserver = new IntersectionObserver(projectObserv, {
  root: null,
  threshold: 0.75,
});
document.querySelectorAll(".row").forEach((row) => {
  projectsObserver.observe(row);
});
// projectsObserver.observe(projects);
