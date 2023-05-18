let offset = 0;
const sliderLine = document.querySelector(".swiper-wrapper");

document.querySelector(".back").addEventListener("click", function () {
  offset = offset + 340;
  if (offset > 680) {
    offset = 0;
  }
  sliderLine.style.left = -offset + "px";
});

document.querySelector(".next").addEventListener("click", function () {
  offset = offset - 340;
  if (offset < 0) {
    offset = 680;
  }
  sliderLine.style.left = -offset + "px";
});
