// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});

document.querySelectorAll(".mobile-menu a").forEach((link) => {
  link.addEventListener("click", function () {
    hamburger.classList.remove("active");
    mobileMenu.classList.remove("active");
  });
});

document.addEventListener("click", function (event) {
  const isClickInsideNav = event.target.closest("nav");
  if (!isClickInsideNav && mobileMenu.classList.contains("active")) {
    hamburger.classList.remove("active");
    mobileMenu.classList.remove("active");
  }
});

// Navbar untuk efek scroll
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scroll > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// smoth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Slider Testimoni
const track = document.getElementById("testimonialsTrack");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let currentIndex = 0;
const cards = document.querySelectorAll(".testimonial-card");
const totalCard = cards.length;

function updateSlider() {
  const carWidth = cards[0].offsetWidth;
  const gap = 32; //2 rem gap
  track.style.transform = `translateX(-${currentIndex * (carWidth + gap)}px)`;
}

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalCard;
  updateSlider();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + totalCard) % totalCard;
  updateSlider();
});

// slide otomatis
setInterval(() => {
  currentIndex = (currentIndex + 1) % totalCards;
  updateSlider();
}, 5000);

// scroll animasi
const revealElements = document.querySelectorAll(".scroll-reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
      }
    });
  },

  {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }
);

revealElements.forEach((el) => {
  revealObserver.observe(el);
});

// responsive slider
window.addEventListener("resize", updateSlider);
