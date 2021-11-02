"use strict";
// selectors
const header = document.querySelector(".header");
const nav = document.querySelector(".nav-bar");
const banner = document.querySelector(".banner");
const movingArea = document.querySelector(".moving-area");
const imgAvatar = document.querySelector(".img-avatar");
const projects = document.querySelector(".projects");
const work = document.querySelector(".work");
const workInfo = document.querySelector(".work-info");
const worBoxModal = document.querySelector(".work-box");
const wokBoxModalText = document.querySelector(".work-box-modal-txt");
const workBoxModalBody = document.querySelector(".work-box-modal-body");
const workBoxCloseBtn = document.querySelector(".work-box-close-btn");
//nav
const navObsEff = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.toggle("nav-scroll");
  } else {
    nav.classList.remove("nav-scroll");
  }

  //entry.target.classList.remove("nav-scroll");
  //observer.unobserve(entry.target);
  console.log(entry);
};
const navObserver = new IntersectionObserver(navObsEff, {
  root: null,
  threshold: 0,
  rootMargin: `${-nav.getBoundingClientRect().height}px`,
});
console.log(header.getBoundingClientRect().height);
navObserver.observe(header);
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
  if (!entry.isIntersecting) return;
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

//work
const blurWorkOver = function (e) {
  //console.log(e.target);
  //console.log(this.workFontSize);
  if (e.target.classList.contains("work-info-text")) {
    const target = e.target;
    const workList = target.closest(".work-list");
    const workListS = workList.querySelectorAll(".work-info-text");

    workListS.forEach((workEl) => {
      if (workEl !== target) {
        //workEl.style.filter = `blur(${this.workBlur}px)`;
        workEl.classList.add("work-out");
        workEl.classList.remove("work-in");
      } else {
        //workEl.style.fontSize = `${this.workFontSize}pt`;
        workEl.classList.remove("work-out");
        workEl.classList.add("work-in");
      }
    });
  }
};

const blurWorkOut = function (e) {
  //console.log(e.target);
  //console.log(this.workFontSize);
  if (e.target.classList.contains("work-info-text")) {
    const target = e.target;
    const workList = target.closest(".work-list");
    const workListS = workList.querySelectorAll(".work-info-text");

    workListS.forEach((workEl) => {
      if (
        workEl.classList.contains("work-in") ||
        workEl.classList.contains("work-out")
      )
        workEl.classList.remove("work-in");
      workEl.classList.remove("work-out");
    });
  }
};
//work effect parr

work.addEventListener("mouseover", blurWorkOver.bind());
work.addEventListener("mouseout", blurWorkOut.bind());

//open modal box
work.addEventListener("click", function (e) {
  if (e.target.classList.contains("work-info-text")) {
    const target = e.target;
    const workList = target.closest(".work-list");
    const workListS = workList.querySelectorAll(".work-info-text");

    /*     workListS.forEach((workEl, i) => {
      let modalInfo = `          
      <h1>Work #1 1704</h1>
      <p>
        Earlier telescopes were consisted of glass lenses mounted in a tube,
        such as Galileo used. Newton discovered when light passed through
        the lens there were different colors that refracted different
        amounts.
      </p>`;
      //      if (workEl !== target) {
      //   document.querySelector(".work-box-modal-body").style.display = "flex";
      //   console.log(workEl);
      // } 
      if (workEl.getAttribute("id") == i) {
        console.log(workEl);
      }
    }); */

    /*     for (const [i, work] of Object.entries(workListS)) {
      if (work.getAttribute("id") == i) {
        console.log(work);
        break;
      }
    } */
    let modalInfo = `          
    <h1 id="work-box-title">${e.target.textContent
      .trim()
      .split(" ")
      .slice(0, 1)
      .join()}</h1>
    <p class="work-box-modal-txt" id="work-box-modal-txt">${
      e.target.textContent
    }
    </p>`;
    document
      .querySelector(".work-box-modal-body")
      .classList.toggle("work-box-modal-body-hidden");
    worBoxModal.insertAdjacentHTML("beforeend", modalInfo);
  }
  console.log();
});

//remove modal box childs when closing
const removeBoxModalInfo = function () {
  worBoxModal.removeChild(document.getElementById("work-box-title"));
  worBoxModal.removeChild(document.getElementById("work-box-modal-txt"));
};
workBoxModalBody.addEventListener("click", function (e) {
  if (e.target.classList.contains("work-box-modal-body")) {
    e.target.classList.toggle("work-box-modal-body-hidden");
    removeBoxModalInfo();
  }
});
workBoxCloseBtn.addEventListener("click", function (e) {
  e.target
    .closest(".work-box-modal-body")
    .classList.toggle("work-box-modal-body-hidden");
  removeBoxModalInfo();
});
