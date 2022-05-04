let mainList = document.querySelector(".main-header__list");
let mainButton = document.querySelector(".main-header__button");
let mainToggle = document.querySelector(".main-header__toggle");

mainToggle.classList.remove("main-header__toggle--nojs");

mainButton.addEventListener("click", function () {
  if (mainList.classList.contains("main-header__list--closed")) {
    mainList.classList.remove("main-header__list--closed");
    mainList.classList.add("main-header__list--opened");
  } else {
    mainList.classList.add("main-header__list--closed");
    mainList.classList.remove("main-header__list--opened");
  }
});
