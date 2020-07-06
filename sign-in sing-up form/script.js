// add some animation
let signInSection = document.getElementById("sign-in-section");
let signUpSection = document.getElementById("sign-up-section");

let signUpForm = document.getElementById("sign-up-form-section");
let signInForm = document.getElementById("sign-in-form-section")

let signUpBtnOverlay = document.getElementById("sign-up-btn-overlay");
let signInBtnOverlay = document.getElementById("sign-in-btn-overlay")

// sign up button 
signUpBtnOverlay.addEventListener("click", function() {
 // signInSection.classList.remove("overlay-transform");
  signInForm.classList.remove("sign-in-form-transform");
  signUpForm.classList.remove("sign-up-form-transform")
  
})
// sign in button move 
signInBtnOverlay.addEventListener("click", function() {
  signInForm.classList.add("sign-in-form-transform");
  signUpForm.classList.add("sign-up-form-transform");
})


// validate form..
let password = document.getElementById("sign-up-password");
let passwordRepeat = document.getElementById("sign-up-password-repeat"); 
let errorMsg = document.getElementsByClassName("error-msg")[0];

let checkPsw = (event) =>  {
  event.preventDefault();
 
  (password.value) === (passwordRepeat.value) 
    ? errorMsg.style.display= "none" 
    : errorMsg.style.display= "inline" ;
}

signUpForm.addEventListener("submit", checkPsw)