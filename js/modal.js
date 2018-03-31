var buttonForOpenForm = document.getElementById("open-form");
var popup = document.querySelector(".search-hotels_form-box");
var form = popup.querySelector("form");
var dateOfArrival = popup.querySelector("[name=search-arrival]");
var dateOfDeparture = popup.querySelector("[name=search-departure]");
var quantityAdults = popup.querySelector("[name=search-adults]");
var quantityChildren = popup.querySelector("[search-adults]");

popup.classList.add("opened_hide-show");
popup.classList.remove("search-hotels_error");

buttonForOpenForm.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.toggle("opened_hide-show");
  popup.classList.remove("search-hotels_error");
});

form.addEventListener("submit", function (evt) {
  if (!dateOfArrival.value || !dateOfDeparture.value || !quantityAdults.value || !quantityChildren.value) {
    evt.preventDefault();
    popup.classList.add("search-hotels_error");
  }
});
