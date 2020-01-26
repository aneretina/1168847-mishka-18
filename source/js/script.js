var popup = document.querySelector(".modal--login");
var link = document.querySelector(".hit__order-btn");
var shadow = document.querySelector(".shadow");
var catalogpopup = document.querySelector(".catalog-list__basket");

if (link) {
  link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal__show");
  shadow.classList.add("modal__show");
  });
}

if (catalogpopup) {
  catalogpopup.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal__show");
  shadow.classList.add("modal__show");
  });
}

shadow.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal__show");
  shadow.classList.remove("modal__show");
});


var nav = document.querySelector(".main-navigation");
var toggle = document.querySelector(".main-navigation__toggle");
var body = document.querySelector(".body");

body.classList.remove("no-js");


toggle.addEventListener("click", function (evt) {

  evt.preventDefault();
  body.classList.add("menu-active");
  toggle.classList.add("menu-active");
  toggle.classList.add("menu-active--close");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  body.classList.remove("menu-active");
});

svg4everybody();
