// selectors
const nav = document.querySelectorAll("nav");
const banner = document.querySelector(".banner");
const movingArea = document.querySelector(".moving-area");
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

let circlObjs = [];
function CircleRandomSize() {
  return Math.floor(Math.random() * (50 - 20 + 1) + 20);
}
function CircleRandomSizeMoveX() {
  return Math.floor(Math.random() * (1000 - 700 + 1) + 700);
}

function CircleRandomSizeMoveY() {
  return Math.floor(Math.random() * (200 - 150 + 1) + 150);
}

function CicleRandomSpawnTop() {
  return Math.floor(Math.random() * (500 - 100 + 1) + 100);
}
function CicleRandomSpawnLeft() {
  return Math.floor(Math.random() * (900 - 300 + 1) + 100);
}
for (let i = 0; i < 10; i++) {
  let circleSize = CircleRandomSize();
  movingArea.insertAdjacentHTML(
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
  left: ${CicleRandomSpawnLeft() + 600}px;
    transition: all 5s linear;
    "></div>`
  );
  circlObjs.push({
    name: `circle-${i}`,
    top: CicleRandomSpawnTop(),
    left: CicleRandomSpawnLeft(),
  });
}
const circleTest = document.querySelectorAll(".circle-test");
window.addEventListener("resize", function (e) {
  //console.log(this.innerWidth);
  /*   circleTest.forEach((circle) => {
    circle.style.left = `${
      this.innerWidth - banner.getBoundingClientRect().left - 1200
    }px`;
    circle.style.top = `${banner.getBoundingClientRect().top}px`;
  }); */
  //console.log(this.innerHeight - banner.getBoundingClientRect().top - 500);
  //console.log(e);
});

movingArea.addEventListener("mousemove", function (e) {
  let mouseX = e.x;
  let mouseY = e.y;

  /*   circleTest.forEach((circleElement) => {
    moveCircle(circleElement, mouseX, mouseY);
  }); */

  //if(e.target.classList.contains() )

  circleTest.forEach((circle) => {
    let randomNx = CircleRandomSizeMoveX();
    let randomNy = CircleRandomSizeMoveY();

    if (mouseX > 352 || mouseX < 1550 || mouseY > 126 || mouseY < 237) {
      circle.style.transform = `translate3d(${mouseX - randomNx}px, ${
        mouseY - randomNy
      }px, 0px)`;
    }

    // circle.style.left = `${mouseX - randomNx}px`;
    // circle.style.top = `${mouseY - randomNy}px`;
    //circle.style.transition = `all ${randomN}s linear;`;
    console.log(e.target);
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
movingArea.addEventListener("mouseout", function () {
  // if (e.target.classList.contains("banner")) {
  //   console.log(e.target);
  // }
  circleTest.forEach((circle, i) => {
    /*     circle.style.left = `${circlObjs[i].left}px`;
    circle.style.top = `${circlObjs[i].top}px`; */
    //circle.style.transform = `translate3d(${circlObjs[i].left}px, ${circlObjs[i].top}px, 1200px)`;
    //circle.style.transform = `translate3d(200px, 500px, 1200px)`;
    circle.style.left = `${circlObjs[i].left + 600}px`;
    circle.style.top = `${circlObjs[i].top}px`;
    circle.style.transform = `translate3d(0px, 0px, 0px)`;
    console.log(circle);
  });
});
//console.log(document.querySelectorAll(".circle-test"));
// console.log(circlObjs);
//console.log(circlObjs[3].name, circlObjs[3].top, circlObjs[3].left);

//projects

//work

//slide up
