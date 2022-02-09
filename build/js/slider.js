"use strict";

if(screen.width < 768) {
const page = [...document.querySelectorAll(".romb-icon > use")].reverse();
const benefit = document.querySelector(".benefits__items"),
slides = [...benefit.querySelectorAll("li")];

let isDragging = false,
startPose = 0,
currentTranslate = 0, 
prevTranslate = 0,
animationID = 0,
currentIndex = 0;
page[0].style = "fill: white";

window.oncontextmenu = (evt) => {
    evt.preventDefault();
    evt.stopPropagation();
    return false;
}
const setSliderPosition = () => {
    benefit.style = `transform: translate(${currentTranslate}px)`
}

const setPositionByIndex = () => {
    currentTranslate = currentIndex * -window.outerWidth
    prevTranslate = currentTranslate;
    page[currentIndex].style.fill = "white";
    setSliderPosition();
}

const animation = () => {
    setSliderPosition();
    if(isDragging) {
        requestAnimationFrame(animation)
    }
}
const getPositionX = (evt) => {
    return (evt.type.includes("mouse") 
    ? evt.pageX 
    : evt.touches[0].clientX)
}

const touchStart = (index) => {
    return function(evt) {
        currentIndex = index;
        startPose = getPositionX(evt);
        isDragging = true;
        animationID = requestAnimationFrame(animation);
    }
}
const touchMove = (evt) => {
    if(isDragging){
        const currentPosition = getPositionX(evt);
        currentTranslate = prevTranslate + currentPosition - startPose;
    }
}

const touchEnd = () => {
    cancelAnimationFrame(animationID)
    isDragging = false

    const moveBy = currentTranslate - prevTranslate;
    if(moveBy < -100 && currentIndex < slides.length -1){
        currentIndex++;
        page[currentIndex - 1].removeAttribute("style");
    }
    if(moveBy > 100 && currentIndex > 0){
        currentIndex--;
        page[currentIndex + 1].removeAttribute("style");
    }
    setPositionByIndex()
}

window.addEventListener('resize', setPositionByIndex);

slides.forEach((slide, index) => {
    slide.querySelector("img").addEventListener("dragstart", (evt) => evt.preventDefault());
    slide.addEventListener("dragstart", (evt) => evt.preventDefault());

    // Touch events
    slide.addEventListener("touchstart", touchStart(index))
    slide.addEventListener("touchmove", touchMove)
    slide.addEventListener("touchend", touchEnd)
})
}