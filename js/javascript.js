// selectors
const nav = document.querySelectorAll("nav");
const banner = document.querySelector(".banner");
const movingArea = document.querySelector(".moving-area");
const imgAvatar = document.querySelector(".img-avatar");
const circle1 = document.querySelector(".circle-1");
const circle2 = document.querySelector(".circle-2");
//nav

//banner
banner.addEventListener("mouseout", function (e) {
  imgAvatar.style.clipPath = `circle(40% at 50% 50%)`;
});
banner.addEventListener("mouseover", function (e) {
  imgAvatar.style.clipPath = `circle(45% at 50% 50%)`;
});
