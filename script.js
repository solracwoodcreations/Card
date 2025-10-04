// Carousel Auto Slide
const track = document.querySelector('.carousel-track');
let currentSlide = 0;

function slideCarousel() {
  const slides = document.querySelectorAll('.carousel img');
  currentSlide = (currentSlide + 1) % slides.length;
  const offset = currentSlide * slides[0].clientWidth;
  track.style.transform = `translateX(-${offset}px)`;
}

setInterval(slideCarousel, 3000);

// Confetti Generator (No Canvas)
const confettiContainer = document.querySelector('.confetti-container');

function createConfettiPiece() {
  const confetti = document.createElement('div');
  confetti.classList.add('confetti');

  const size = Math.random() * 8 + 4; // 4px - 12px
  confetti.style.width = `${size}px`;
  confetti.style.height = `${size}px`;

  confetti.style.left = `${Math.random() * 100}%`;
  confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
  confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
  confetti.style.transform = `rotate(${Math.random() * 360}deg)`;

  confettiContainer.appendChild(confetti);

  setTimeout(() => confetti.remove(), 5000);
}

// Generate confetti repeatedly
setInterval(() => {
  for (let i = 0; i < 5; i++) {
    createConfettiPiece();
  }
}, 300);
