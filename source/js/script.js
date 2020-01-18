var popup = document.querySelector(".modal__login");
var link = document.querySelector(".hit__order-btn");
var shadow = document.querySelector(".modal__shadow");
var catalogpopup = document.querySelector(".catalog-list__basket");

if (link) {
link.addEventListener("click", function(evt) {
 evt.preventDefault();
 popup.classList.add("modal__show");
 shadow.classList.add("modal__show");
});
}

if (catalogpopup) {
catalogpopup.addEventListener("click", function(evt) {
 evt.preventDefault();
 popup.classList.add("modal__show");
 shadow.classList.add("modal__show");
});
}

shadow.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal__show");
  catalogpopup.classList.remove("modal__show");
});


var nav = document.querySelector(".main-navigation");
var toggle = document.querySelector(".main-navigation__toggle");
var close = document.querySelector(".main-navigation__close");
var list = document.querySelector(".main-navigation__list");
var body = document.querySelector(".body");

body.classList.remove("no-js");

list.addEventListener("click", function (evt) {
  evt.preventDefault();
  toggle.classList.add("menu-active");
  close.classList.add("menu-active");
});

toggle.addEventListener("click", function (evt) {
   evt.preventDefault();
   body.classList.add("menu-active");
});

close.addEventListener("click", function (evt) {
   evt.preventDefault();
   body.classList.remove("menu-active");
});
