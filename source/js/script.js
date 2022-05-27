let mainList = document.querySelector(".main-header__list");
let mainButton = document.querySelector(".main-header__button");
let mainToggle = document.querySelector(".main-header__toggle");
let meinHeaderAfter = document.querySelector(".main-header::after");

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

mainButton.addEventListener("click", function () {
  if (mainButton.classList.contains("main-header__button--close")) {
    mainButton.classList.remove("main-header__button--close");
    mainButton.classList.add("main-header__button--open");
  } else {
    mainButton.classList.add("main-header__button--close");
    mainButton.classList.remove("main-header__button--open");
  }
});
