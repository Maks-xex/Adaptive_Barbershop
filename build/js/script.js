let menu = document.querySelector(".main-nav");
let navToggle = document.querySelector(".main-nav__toggle");

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

let popupFail = document.querySelector(".popup-fail");
let popupSuccess = document.querySelector(".popup-success");
let form = document.querySelector(".form-register");
let textValue = form.querySelector("[type=text]");
let telValue = document.querySelector("[type=tel]");
let closeFail = document.querySelector(".modal-fail--close");
let closeSuccess = document.querySelector(".modal-success--close");

form.addEventListener("submit", function (e) {
	e.preventDefault();
	if (!textValue.value || !telValue.value) {
		popupFail.classList.add("modal-show__fail");
		// popupFail.classList.add("modal-show__fallout");
	}
	else {
		popupSuccess.classList.add("modal-show__success");
		// popupSuccess.classList.add("modal-fallout");
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



