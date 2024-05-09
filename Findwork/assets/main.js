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