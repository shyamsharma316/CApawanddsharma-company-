const reviewsWrapper = document.querySelector('.reviews-wrapper');
const reviewItems = document.querySelectorAll('.review');
const reviewWidth = reviewItems[0].offsetWidth;
let currentTranslateX = 0;
let currentIndex = 0;

function moveReviews() {
  currentIndex = (currentIndex + 1) % reviewItems.length;
  currentTranslateX = -currentIndex * reviewWidth;
  applyTranslateX();
}

function applyTranslateX() {
  reviewsWrapper.style.transform = `translateX(${currentTranslateX}px)`;
}

setInterval(moveReviews, 3000); // Change the interval duration (in milliseconds) to control the review movement speed
