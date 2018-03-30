var buttonForOpenForm = document.getElementById("open-form"), popup = document.querySelector(".search-hotels_form-box");
popup.classList.add("opened_hide-show"), buttonForOpenForm.addEventListener("click", function (e) {
  e.preventDefault(), popup.classList.toggle("opened_hide-show")
});
