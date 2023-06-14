// Navigation
const openMenuBtn = document.querySelector("#open-menu-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");
const header = document.querySelector("#header");
let lastNavStatus = "HIDDEN";

// Show the nav bar initially on large screens
if (innerWidth >= 1110) header.setAttribute("aria-nav-status", "SHOWN");

openMenuBtn.addEventListener("click", () => {
  header.setAttribute("aria-nav-status", "SHOWN");
  lastNavStatus = "SHOWN";
});

closeMenuBtn.addEventListener("click", () => {
  header.setAttribute("aria-nav-status", "HIDDEN");
  lastNavStatus = "HIDDEN";
});

window.addEventListener("resize", () => {
  const status = innerWidth >= 1110 ? "SHOWN" : lastNavStatus;
  header.setAttribute("aria-nav-status", status);
});
