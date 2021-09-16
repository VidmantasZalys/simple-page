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
circle2.style.left = `${
  0.6 *
  (banner.getBoundingClientRect().width - circle2.getBoundingClientRect().width)
}px`;
circle1.style.top = `${
  0.5 *
  (banner.getBoundingClientRect().height -
    circle2.getBoundingClientRect().height)
}px`;

window.addEventListener("resize", function (e) {
  //console.log(this.innerWidth);
  circle1.style.left = `${
    this.innerWidth - banner.getBoundingClientRect().left - 1200
  }px`;
  circle1.style.top = `${
    this.innerHeight + banner.getBoundingClientRect().top - 500
  }px`;
  console.log(this.innerHeight - banner.getBoundingClientRect().top - 500);
});
//console.log(banner.getBoundingClientRect().top);

//projects

//work

//slide up
