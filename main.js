const searchbar = document.querySelector(".header__search-bar input");

searchbar.addEventListener("focus", () => {
  document.querySelector(".header__search-bar").classList.add("focus");
});
searchbar.addEventListener("focusout", () => {
  document.querySelector(".header__search-bar").classList.remove("focus");
});
document.querySelector(".user-icon").addEventListener("click", () => {
  const profile = document.querySelector(".profile");
  if (profile.classList.contains("active")) {
    profile.classList.remove("active");
  } else {
    profile.classList.add("active");
  }
});

const imgs = [
  "https://static.topcv.vn/img/bannerT11204.png",
  "https://static.topcv.vn/img/unnamed%20(30).png",
  "https://static.topcv.vn/img/2024-05-07_154050.png",
];
const bannerImg = document.querySelector(".banner__img");
let curr = 0;
bannerImg.src = imgs[curr];
const al = document.querySelector(".arrow-left");
const ar = document.querySelector(".arrow-right");

function nextSlide(currIndex) {
  if (currIndex == imgs.length - 1) {
    curr = 0;
  } else {
    curr++;
  }
  bannerImg.src = imgs[curr];
}

function prevSlide(currIndex) {
  if (currIndex == 0) {
    curr = imgs.length - 1;
  } else {
    curr--;
  }
  bannerImg.src = imgs[curr];
}

al.addEventListener("click", () => {
  prevSlide(curr);
});

ar.addEventListener("click", () => {
  nextSlide(curr);
});

setInterval(() => nextSlide(curr), 3000);
