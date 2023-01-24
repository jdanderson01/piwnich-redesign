const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");

const nextSlide = () => {
  //get current class from slide
  const current = document.querySelector(".current");
  //remove current class from slide
  current.classList.remove();
  //check for next slide
  if (current.nextElementSibling) {
    //add current to the next slide
    current.nextElementSibling.classList.add("current");
  } else {
    //add current to start
    slides[0].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};

const prevSlide = () => {
  //get current class from slide
  const current = document.querySelector(".current");
  //remove current class from slide
  current.classList.remove();
  //check for previous slide
  if (current.previousElementSibling) {
    //add current to the previous slide
    current.previousElementSibling.classList.add("current");
  } else {
    //add current to last
    slides[slides.length - 1].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};

//button events
next.addEventListener("click", (e) => {
  nextSlide();
});

prev.addEventListener("click", (e) => {
  prevSlide();
});
