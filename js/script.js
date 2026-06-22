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

  let currentWord = words[wordIndex];

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
      wordIndex++;

      if (wordIndex >= words.length) {
        wordIndex = 0;
      }
    }
  }

  setTimeout(type, deleting ? 60 : 120);
}

type();


// =========================
// Scroll Reveal Animation
// =========================

function revealElements() {

  const reveals = document.querySelectorAll(
    ".reveal, .skill-card, .project-card, .glass-card"
  );

  reveals.forEach((element) => {

    const windowHeight = window.innerHeight;

    const elementTop =
      element.getBoundingClientRect().top;

    const revealPoint = 120;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }

  });
}

window.addEventListener("scroll", revealElements);
revealElements();


// =========================
// Navbar Background Change
// =========================

window.addEventListener("scroll", () => {

  const navbar =
    document.querySelector(".navbar");

  if (!navbar) return;

  if (window.scrollY > 50) {

    navbar.style.background =
      "rgba(5,8,22,0.95)";

    navbar.style.boxShadow =
      "0 5px 20px rgba(168,85,247,0.3)";

  } else {

    navbar.style.background =
      "rgba(5,8,22,0.6)";

    navbar.style.boxShadow = "none";
  }

});


// =========================
// Mobile Menu Toggle
// =========================

const menuBtn =
  document.querySelector(".menu-btn");

const navLinks =
  document.querySelector(".nav-links");

if (menuBtn) {

  menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show-menu");

  });

}


// =========================
// Active Navbar Link
// =========================

const links =
  document.querySelectorAll(".nav-links a");

links.forEach(link => {

  link.addEventListener("click", () => {

    links.forEach(item =>
      item.classList.remove("active-link"));

    link.classList.add("active-link");

  });

});


// =========================
// Floating Profile Image
// =========================

const profileImage =
  document.querySelector(".hero-image img");

if (profileImage) {

  let angle = 0;

  setInterval(() => {

    angle += 0.05;

    profileImage.style.transform =
      `translateY(${Math.sin(angle) * 12}px)`;

  }, 20);

}


// =========================
// Skill Card Hover Effect
// =========================

const skillCards =
  document.querySelectorAll(".skill-card");

skillCards.forEach(card => {

  card.addEventListener("mouseenter", () => {

    card.style.transform =
      "translateY(-10px) scale(1.05)";

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

  anchor.addEventListener("click", function(e) {

    e.preventDefault();

    const target =
      document.querySelector(
        this.getAttribute("href")
      );

    if(target){

      target.scrollIntoView({
        behavior: "smooth"
      });

    }

  });

});