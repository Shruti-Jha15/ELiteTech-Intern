// ====================
//  MOBILE NAV TOGGLE
// ====================

// Grab the menu button and nav links

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

// Toggle nav menu open/close when the hamburger is clicked

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  // Change icon between menu and close

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

// ====================
//  CHARACTER SELECTION
// ====================

// Overlay elements for showing chosen character

const overlay      = document.getElementById("selected-character");
const chosenImg    = document.getElementById("chosen-character");
const chosenName   = document.getElementById("chosen-name");
const chosenDesc   = document.getElementById("chosen-desc");

// Add click listener to each character thumbnail

document.querySelectorAll(".characters img").forEach(img => {
  img.addEventListener("click", () => {
    // Update big image, name and description
    chosenImg.src = img.src;
    chosenImg.alt = img.dataset.name;
    chosenName.textContent = img.dataset.name;
    chosenDesc.textContent = img.dataset.desc;

    // remove any previous special style
    chosenDesc.classList.remove("gold-desc");

    // 👉 if selected character is ELEND, add gold style
    if (img.dataset.name.toUpperCase() === "ELEND") {
      chosenDesc.classList.add("gold-desc");
    }

    overlay.classList.remove("show");
    void overlay.offsetWidth; // restart animation
    overlay.classList.add("show");
    overlay.style.display = "flex";

    // remove any previous special style
    chosenDesc.classList.remove("purple-desc");

    // 👉 if selected character is ELEND, add gold style
    if (img.dataset.name.toUpperCase() === "VIN") {
      chosenDesc.classList.add("purple-desc");
    }

    overlay.classList.remove("show");
    void overlay.offsetWidth; // restart animation
    overlay.classList.add("show");
    overlay.style.display = "flex";
   
    // remove any previous special style
    chosenDesc.classList.remove("black-desc");

    // 👉 if selected character is LORD RULER, add darkblue style
    if (img.dataset.name.toUpperCase() === "LORD RULER") {
      chosenDesc.classList.add("darkblue-desc");
    }

    overlay.classList.remove("show");
    void overlay.offsetWidth; // restart animation
    overlay.classList.add("show");
    overlay.style.display = "flex";

    // remove any previous special style
    chosenDesc.classList.remove("silver-desc");

    // 👉 if selected character is KELSIER, add silver style
    if (img.dataset.name.toUpperCase() === "KELSIER") {
      chosenDesc.classList.add("silver-desc");
    }

    overlay.classList.remove("show");
    void overlay.offsetWidth; // restart animation
    overlay.classList.add("show");
    overlay.style.display = "flex";

    // remove any previous special style
    chosenDesc.classList.remove("red-desc");

    // 👉 if selected character is ZANE, add red style
    if (img.dataset.name.toUpperCase() === "ZANE") {
      chosenDesc.classList.add("red-desc");
    }

    overlay.classList.remove("show");
    void overlay.offsetWidth; // restart animation
    overlay.classList.add("show");
    overlay.style.display = "flex";

    // remove any previous special style
    chosenDesc.classList.remove("green-desc");

    // 👉 if selected character is SAZED, add green style
    if (img.dataset.name.toUpperCase() === "SAZED") {
      chosenDesc.classList.add("green-desc");
    }

    overlay.classList.remove("show");
    void overlay.offsetWidth; // restart animation
    overlay.classList.add("show");
    overlay.style.display = "flex";
    
    // Trigger fade-in animation by re-adding the 'show' class
    overlay.classList.remove("show");
    void overlay.offsetWidth;          // restart animation
    overlay.classList.add("show");

     // Make overlay visible
    overlay.style.display = "flex";
  });
});

// Close overlay when anywhere on it is clicked

overlay.addEventListener("click", () => {
  overlay.style.display = "none";
});

// Close mobile menu when a nav link is clicked

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// ====================
//  SCROLL REVEAL ANIMATIONS
// ====================

// Basic animation options

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 2000,
};

// Reveal elements in sequence with delays

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
  delay: 2000,
});
ScrollReveal().reveal(".header__container .header__btn", {
  ...scrollRevealOption,
  delay: 3000,
});
ScrollReveal().reveal(".socials li", {
  ...scrollRevealOption,
  delay: 4000,
  interval: 500,
});