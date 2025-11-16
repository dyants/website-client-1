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
  const navbar = this.document.getElementById("navbar");
  if (windows.scrolly > 50) {
  } else {
    navbar.classList.remove("scrolled");
  }
});
