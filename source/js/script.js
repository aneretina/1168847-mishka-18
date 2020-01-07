var popup = document.querySelector(".modal__login");
var link = document.querySelector(".hit__order-btn");
var shadow = document.querySelector(".modal__shadow");


link.addEventListener("click", function(evt) {
 evt.preventDefault();
 popup.classList.add("modal__show");
 shadow.classList.add("modal__show");
 user.focus();
});

shadow.addEventListener("click", function (evt) {
  popup.classList.remove("modal__show");
});
