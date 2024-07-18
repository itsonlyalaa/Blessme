//declaring variables //searches html document for given selector
let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSelection = document.querySelector(".form-box");

//attaches an event listener to signup button so when clicked it will execute
signup.addEventListener("click", /*arrow function*/  () => {
	//adds movesliderto slider to make it transition
	slider.classList.add("moveslider");
	//adds form box move to formselection for effect(moving signup/login form)
	formSelection.classList.add("form-box-move");
});

login.addEventListener("click", () => {
	//revert slider
	slider.classList.remove("moveslider");
	//reverts form
	formSelection.classList.remove("form-box-move");
});
