// =========================
// Typing Animation
// =========================

const typingText = document.getElementById("typing");

const words = [
  "Frontend Developer",
  "React Developer",
  "Web Designer",
  "BCA Student"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function type() {

  if (!typingText) return;

  const currentWord = words[wordIndex];

  if (!deleting) {

    typingText.textContent =
      currentWord.substring(0, charIndex + 1);

    charIndex++;

    if (charIndex === currentWord.length) {
      deleting = true;
      setTimeout(type, 1500);
      return;
    }

  } else {

    typingText.textContent =
      currentWord.substring(0, charIndex - 1);

    charIndex--;

    if (charIndex === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(type, deleting ? 60 : 120);
}

type();


// =========================
// Scroll Reveal Animation
// =========================

function revealElements() {

  const elements = document.querySelectorAll(
    ".reveal, .skill-card, .project-card, .glass-card, .edu-card"
  );

  elements.forEach((element) => {

    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 120;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }

  });

}

window.addEventListener("scroll", revealElements);
window.addEventListener("load", revealElements);


// =========================
// Navbar Scroll Effect
// =========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if (!navbar) return;

  if (window.scrollY > 50) {

    navbar.style.background =
      "rgba(255,255,255,0.98)";

    navbar.style.boxShadow =
      "0 5px 20px rgba(0,0,0,0.08)";

  } else {

    navbar.style.background =
      "rgba(255,255,255,0.95)";

    navbar.style.boxShadow = "none";

  }

});


// =========================
// Mobile Menu Toggle
// =========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

  menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show-menu");

  });

}


// =========================
// Active Navigation Link
// =========================

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

  link.addEventListener("click", () => {

    links.forEach(item => {
      item.classList.remove("active-link");
    });

    link.classList.add("active-link");

  });

});


// =========================
// Skill Card Hover Animation
// =========================

const skillCards =
  document.querySelectorAll(".skill-card");

skillCards.forEach(card => {

  card.addEventListener("mouseenter", () => {

    card.style.transform =
      "translateY(-8px) scale(1.03)";

  });

  card.addEventListener("mouseleave", () => {

    card.style.transform =
      "translateY(0) scale(1)";

  });

});


// =========================
// Smooth Scroll
// =========================

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

  anchor.addEventListener("click", function (e) {

    const target =
      document.querySelector(
        this.getAttribute("href")
      );

    if (target) {

      e.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    }

  });

});


// =========================
// Page Load Fade Effect
// =========================

window.addEventListener("load", () => {

  document.body.classList.add("loaded");

});