// validate form..


// add some animation
let signInSection = document.getElementById("sign-in-section");
let signUpSection = document.getElementById("sign-up-section");

let forms = document.getElementsByClassName("forms")[0];
let signUpForm = document.getElementById("sign-up-form-section");
let signInForm = document.getElementById("sign-in-form-section")

let overlay = document.getElementsByClassName("overlay")[0];
let signUpBtnOverlay = document.getElementById("sign-up-btn-overlay");
let signInBtnOverlay = document.getElementById("sign-in-btn-overlay")

signUpBtnOverlay.addEventListener("click", function() {
  overlay.classList.add("overlay-transform");
  forms.classList.add("forms-transform");
})

signInBtnOverlay.addEventListener("click", function() {
  overlay.classList.remove("overlay-transform");
  forms.classList.remove("forms-transform")
})

