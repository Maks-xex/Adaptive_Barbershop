let menu = document.querySelector(".main-nav");
let navToggle = document.querySelector(".main-nav__toggle");
let userLoginForm = document.querySelector(".user-form__login");
let modalForm = document.querySelector(".modal-login-form__wrapper");

//Login Form
let close = modalForm.querySelector(".close-modal");
let loginForm = modalForm.querySelector("#login-form");
let login = modalForm.querySelector("[name=Login]");
let password = modalForm.querySelector("[name=Password]");
let modalLoginForm = document.querySelector(".modal-login__form");

let isStorageSupport = true;
let storage = "";

try {
	storage = localStorage.getItem("login"); // geting key value from storage

}
catch (err){
	isStorageSupport = false;
}
userLoginForm.addEventListener("click", function (e) {
	e.preventDefault();
	modalForm.classList.add("modal-show");
	modalLoginForm.classList.add("modal-fallout");
	menu.classList.add("main-nav--closed")
	menu.classList.remove("main-nav--opened")
	if (storage) {
		login.value = storage;
		password.focus();
	} else{
		login.focus();
	}
});
close.addEventListener("click", function(e){
	e.preventDefault();
	modalForm.classList.remove("modal-show");
	modalLoginForm.classList.remove("modal-fallout");
	modalLoginForm.classList.remove("modal-error");
});
loginForm.addEventListener("submit", function(e) {
	if(!login.value || !password.value) {
		e.preventDefault();
		modalLoginForm.classList.remove("modal-fallout");
		modalLoginForm.classList.remove("modal-error");
		modalForm.offsetWidth = modalForm.offsetWidth;
		modalLoginForm.classList.add("modal-error");
	} else {
		if (isStorageSupport) {
			localStorage.setItem("login", login.value);
		}
	}
});

navToggle.addEventListener("click", function(){
	if(menu.classList.contains("main-nav--closed")) {
		menu.classList.remove("main-nav--closed");
		menu.classList.add("main-nav--opened");
	}
	else {
		menu.classList.remove("main-nav--opened")
		menu.classList.add("main-nav--closed")
	}
});

// popup success and fail
let popupFail = document.querySelector(".popup-fail");
let popupSuccess = document.querySelector(".popup-success");
let form = document.querySelector(".form-register");
let textValue = form.querySelector("input");
let telValue = document.querySelector("[type=tel]");
let closeFail = document.querySelector(".modal-fail--close");
let closeSuccess = document.querySelector(".modal-success--close");

form.addEventListener("submit", function (e) {
	e.preventDefault();
	if (!textValue.value || !telValue.value) {
		popupFail.classList.add("modal-show__fail");
	}
	else {
		popupSuccess.classList.add("modal-show__success");
	}
});
closeFail.addEventListener("click", function (e){
	e.preventDefault();
	popupFail.classList.remove("modal-show__fail");
});
closeSuccess.addEventListener("click", function (e) {
	e.preventDefault();
	popupSuccess.classList.remove("modal-show__success") ;
});


// var slider = document.querySelector(".slider-container");
// var slides = Array.from(document.querySelectorAll(".slide"))

// let isDragging = false,
// startPos = 0,
// currentTranslate = 0,
// prevTranslate = 0,
// animationID = 0,
// currentIndex = 0

// slides.forEach((slide, index) => {
// const slideImage = slide.querySelector("img")
// slideImage.addEventListener("dragstart", (e) => e.preventDefault())
//touch
// slide.addEventListener("touchstart", touchStart(index))
// slide.addEventListener("touchend", touchEnd)
// slide.addEventListener("touchmove", touchMove)

// slide.addEventListener("mousedown", touchStart(index))
// slide.addEventListener("mouseup", touchEnd)
// slide.addEventListener("mouseleave", touchEnd)
// slide.addEventListener("mousemove", touchMove)
// })



