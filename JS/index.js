// script.js

// Sidebar toggle
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('active');
}

function closeSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.remove('active');
}

// Image slider
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const slidesContainer = document.getElementById("slidesContainer");

function showSlide(index) {
  slideIndex = (index + slides.length) % slides.length; // handles negative wrap
  slidesContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function nextSlide() {
  showSlide(slideIndex + 1);
}

function prevSlide() {
  showSlide(slideIndex - 1);
}

// Auto-slide
setInterval(nextSlide, 5000);

// Initialize
window.onload = () => {
  showSlide(slideIndex);
};


// Auto-slide every 5 seconds
setInterval(() => {
  nextSlide();
}, 5000);


// Scroll animation for About Us section
window.addEventListener('scroll', () => {
  const aboutSection = document.querySelector('.about-section');
  if (!aboutSection) return;
  const rect = aboutSection.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight - 100) {
    aboutSection.classList.add('visible');
  }
});
// Close sidebar when clicking on internal anchor links inside sidebar
document.querySelectorAll('#sidebar a[href^="#"]').forEach(link => {
  link.addEventListener('click', () => {
    closeSidebar(); // Assuming closeSidebar() is already defined in your script.js
  });
});

// rooms slider //

let currentIndexes = [0, 0];
let autoIntervals = [];

function moveSlide(step, groupIndex) {
  const group = document.querySelector(`.slide-group-${groupIndex}`);
  const images = group.querySelectorAll("img");
  currentIndexes[groupIndex] += step;

  if (currentIndexes[groupIndex] >= images.length) {
    currentIndexes[groupIndex] = 0;
  } else if (currentIndexes[groupIndex] < 0) {
    currentIndexes[groupIndex] = images.length - 1;
  }

  const offset = currentIndexes[groupIndex] * -100;
  group.style.transform = `translateX(${offset}%)`;
}

function startAutoSlide(groupIndex) {
  autoIntervals[groupIndex] = setInterval(() => {
    moveSlide(1, groupIndex);
  }, 5000);
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".slides").forEach((group, index) => {
    group.style.transform = "translateX(0%)";
    startAutoSlide(index);
  });
});




