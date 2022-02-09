"use strict";

const menu = document.querySelector(".main-nav");
const navToggle = document.querySelector(".main-nav__toggle");
const userLoginForm = document.querySelector(".user-form__login");
const modalForm = document.querySelector(".modal-login-form__wrapper");

//Login Form
const close = modalForm.querySelector(".close-modal");
const loginForm = modalForm.querySelector("#login-form");
const login = modalForm.querySelector("[name=Login]");
const password = modalForm.querySelector("[name=Password]");
const modalLoginForm = document.querySelector(".modal-login__form");

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
const popupFail = document.querySelector(".popup-fail");
const popupSuccess = document.querySelector(".popup-success");
const form = document.querySelector(".form-register");
const telValue = document.querySelector("[type=tel]");
const closeFail = document.querySelector(".modal-fail--close");
const closeSuccess = document.querySelector(".modal-success--close");
if(form){
	const textValue = form.querySelector("input");
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
}
