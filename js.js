let img = document.querySelectorAll(".sliderLine img");
let sliderLine = document.querySelector(".sliderLine");
let count = 0;
let width;
function init() {
  width = document.querySelector(".slider").offsetWidth;
  sliderLine.style.width = width * img.length + "px";
  img.forEach((item) => {
    item.style.width = width + "px";
    item.style.height = "auto";
  });
  stepSlider();
}
window.addEventListener("resize", init);
init();
document.querySelector(".button-next").addEventListener("click", function () {
  count++;
  if (count >= img.length) {
    count = 0;
  }
  stepSlider();
});

document
  .querySelector(".button-previous")
  .addEventListener("click", function () {
    count--;
    if (count < 0) {
      count = img.length - 1;
    }
    stepSlider();
  });
function stepSlider() {
  sliderLine.style.transform = `translate(-${count * width}px)`;
}
