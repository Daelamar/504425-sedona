var buttonForOpenForm = document.getElementById("open-form");
var popup = document.querySelector(".search-hotels_form-box");

popup.classList.add("opened_hide-show");

buttonForOpenForm.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.toggle("opened_hide-show");
});
