// selectors
const nav = document.querySelectorAll("nav");
const banner = document.querySelector(".banner");
const imgAvatar = document.querySelector(".img-avatar");
const circle1 = document.querySelector(".circle-1");
const circle2 = document.querySelector(".circle-2");
//nav

//banner
const avatarExpand = 45;
banner.addEventListener("click", function (e) {
  imgAvatar.style.clipPath = `circle(${avatarExpand}% at 50% 50%)`;
});
banner.addEventListener("mouseout", function () {
  imgAvatar.style.clipPath = ``;
});

/* circle1.style.left = `${
  window.innerWidth - banner.getBoundingClientRect().left - 1200
}px`;
circle1.style.top = `${
  window.innerHeight - banner.getBoundingClientRect().top - 548
}px`;
 */
/* circle2.style.left = `${
  0.6 *
  (banner.getBoundingClientRect().width - circle2.getBoundingClientRect().width)
}px`;
circle1.style.top = `${
  0.5 *
  (banner.getBoundingClientRect().height -
    circle2.getBoundingClientRect().height)
}px`; */

function CircleRandomSize() {
  return Math.floor(Math.random() * (50 - 20 + 1) + 20);
}

function CicleRandomSpawnTop() {
  return Math.floor(Math.random() * (500 - 100 + 1) + 100);
}
function CicleRandomSpawnLeft() {
  return Math.floor(Math.random() * (900 - 300 + 1) + 100);
}
for (let i = 0; i < 5; i++) {
  let circleSize = CircleRandomSize();
  banner.insertAdjacentHTML(
    "afterbegin",
    `<div class="circle-test" data-crcl="circle-${i}" style="
    
  z-index: 0;
  position: absolute;
  width: ${circleSize}px;
  height: ${circleSize}px;
  border-radius: 50%;
  margin: 2rem 0rem 2rem 0rem;
  background-color: #3d405b;
  top: ${CicleRandomSpawnTop()}px;
  left: ${CicleRandomSpawnLeft()}px;
    transition: all 1s ease;
    "></div>`
  );
}
window.addEventListener(/* "resize" */ "click", function (e) {
  //console.log(this.innerWidth);
  /*   circle1.style.left = `${
    this.innerWidth - banner.getBoundingClientRect().left - 1200
  }px`;
  circle1.style.top = `${banner.getBoundingClientRect().top}px`;
  circle2.style.left = `${
    this.innerWidth - banner.getBoundingClientRect().left - 1200 / 2
  }px`;
  circle1.style.top = `${banner.getBoundingClientRect().top}px`; */
  //console.log(this.innerHeight - banner.getBoundingClientRect().top - 500);
  //console.log(e);
});

const circleTest = document.querySelectorAll(".circle-test");
const elementEdge = function (element) {};

const elKrastas = function (circlEl, mouseCordX, mouseCordY) {
  const circlTop = circlEl.getBoundingClientRect().top;
  const circlLeft = circlEl.getBoundingClientRect().left;
  const circlBottom = circlEl.getBoundingClientRect().bottom;
  const circlRight = circlEl.getBoundingClientRect().right;
  let circlTopEdge = Math.abs(circlTop - mouseCordY);
  let circlLeftEdge = Math.abs(circlLeft - mouseCordX);
  let circlBottomEdge = Math.abs(circlBottom - mouseCordY);
  let circlRightEdge = Math.abs(circlRight - mouseCordX);
  let minEdge = Math.min(
    circlTopEdge,
    circlLeftEdge,
    circlBottomEdge,
    circlRightEdge
  );
  let position;
  switch (minEdge) {
    case circlTopEdge:
      position = "top";
      break;
    case circlLeftEdge:
      position = "left";
      break;
    case circlBottomEdge:
      position = "bottom";
      break;
    case circlRightEdge:
      position = "right";
      break;
  }

  console.log(circlRightEdge);
  return position;
};

const moveCircle = function (circlEl, mouseX, mouseY) {
  let elementKrastas = elKrastas(circlEl, mouseX, mouseY);
  let circleWidth = circlEl.getBoundingClientRect().width;
  let circleHeight = circlEl.getBoundingClientRect().height;
  let circleBound = circlEl.getBoundingClientRect();
  switch (elementKrastas) {
    case "top":
      circlEl.style.top = `${mouseY + 5}px`;
      break;
    case "left":
      circlEl.style.left = `${mouseX + 5}px`;
      break;
    case "right":
      circlEl.style.left = `${mouseX - circleWidth - 5}px`;
      break;
    case "bottom":
      circlEl.style.top = `${mouseY - circleHeight - 5}px`;
      break;
  }
};

banner.addEventListener("mousemove", function (e) {
  let mouseX = e.x;
  let mouseY = e.y;

  circleTest.forEach((circleElement) => {
    moveCircle(circleElement, mouseX, mouseY);
  });

  /*   circleTest.style.top = `${circleBound.top + e.screenY / 100}px`;
  circleTest.style.left = `${circleBound.left + e.screenX / 50}px`;
  circleTest.style.left = `${
    circleBound.left + (e.screenX - circleWidth) / 50
  }px`;
  circleTest.style.top = `${
    circleBound.top + (e.screenY - circleHeight) / 100
  }px`; */
  /*   if (e.screenX) {
    circleTest.style.left = `${circleTest.getBoundingClientRect().left + 5}px`;
  } else if (e.screenY) {
    circleTest.style.top = `${circleTest.getBoundingClientRect().top + 5}px`;
  } */
  /*   circleTest.style.marginLeft = `${e.screenX / 20}px`;
  circleTest.style.marginTop = `${e.screenY}px`;

  console.log(
    circleTest.getBoundingClientRect().top +
      (circleTest.getBoundingClientRect().top - e.screenY) / 200
  ); */
  //console.log(e.x);
});
console.log(document.querySelectorAll(".circle-test"));

//projects

//work

//slide up
