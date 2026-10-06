// Elements
const header = document.getElementById("header");
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
const links = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("main section");

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Add a soft shadow to the header after scrolling
function onScroll() {
  header.classList.toggle("scrolled", window.scrollY > 10);
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Open / close the mobile menu
function setMenu(open) {
  nav.classList.toggle("open", open);
  menuBtn.classList.toggle("open", open);
  menuBtn.setAttribute("aria-expanded", String(open));
}
menuBtn.addEventListener("click", () =>
  setMenu(!nav.classList.contains("open")),
);
links.forEach((link) => link.addEventListener("click", () => setMenu(false)));

// Highlight the nav link of the section currently on screen
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        links.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === "#" + entry.target.id,
          );
        });
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" },
);
sections.forEach((section) => observer.observe(section));
