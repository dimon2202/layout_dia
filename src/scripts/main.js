'use strict';

const form = document.getElementById('contactForm');
const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.slider__arrow--left')
const nextBtn = document.querySelector('.slider__arrow--right')

const SLIDES_COUNT = 4;
let currentSlide = 1;
let autoSlideInterval;

function updateSlide() {
  for (let i = 1; i <= SLIDES_COUNT; i++) {
    slider.classList.remove(`slider--image--${i}`);
  }

  slider.classList.add(`slider--image--${currentSlide}`);
}

function nextSlide() {
  currentSlide = currentSlide === SLIDES_COUNT ? 1 : currentSlide + 1;
  updateSlide();
}

function prevSlide() {
  currentSlide = currentSlide === 1 ? SLIDES_COUNT : currentSlide - 1;
  updateSlide();
}

function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 7000);
}

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  startAutoSlide();
}

nextBtn.addEventListener('click', () => {
  nextSlide();
  resetAutoSlide();
});

prevBtn.addEventListener('click', () => {
  prevSlide();
  resetAutoSlide();
});

startAutoSlide();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
