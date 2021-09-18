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
  return Math.floor(Math.random() * (6 - 1 + 1) + 1);
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
  width: ${circleSize}rem;
  height: ${circleSize}rem;
  border-radius: 50%;
  margin: 2rem 0rem 2rem 0rem;
  background-color: #3d405b;
  top: ${CicleRandomSpawnTop()}px;
  left: ${CicleRandomSpawnLeft()}px;
    transition: all 3s ease;
    "></div>`
  );
}
window.addEventListener(/* "resize" */ "click", function (e) {
  //console.log(this.innerWidth);
  circle1.style.left = `${
    this.innerWidth - banner.getBoundingClientRect().left - 1200
  }px`;
  circle1.style.top = `${banner.getBoundingClientRect().top}px`;
  circle2.style.left = `${
    this.innerWidth - banner.getBoundingClientRect().left - 1200 / 2
  }px`;
  circle1.style.top = `${banner.getBoundingClientRect().top}px`;
  //console.log(this.innerHeight - banner.getBoundingClientRect().top - 500);
  console.log(e);
});

banner.addEventListener("mousemove", function (e) {
  let circleTest = document.querySelector(".circle-test");
  /*   if (e.screenX) {
    circleTest.style.left = `${circleTest.getBoundingClientRect().left + 5}px`;
  } else if (e.screenY) {
    circleTest.style.top = `${circleTest.getBoundingClientRect().top + 5}px`;
  } */
  circleTest.style.marginLeft = `${e.screenX / 20}px`;
  circleTest.style.marginTop = `${e.screenY}px`;

  console.log(
    circleTest.getBoundingClientRect().top +
      (circleTest.getBoundingClientRect().top - e.screenY) / 200
  );
});
//console.log(banner.getBoundingClientRect().top);

//projects

//work

//slide up
