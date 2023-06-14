// Navigation
const openMenuBtn = document.querySelector("#open-menu-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");
const header = document.querySelector("#header");
const LARGE_SCREEN_WIDTH = 1110;
let lastNavStatus = "HIDDEN";

// Show the nav bar initially on large screens
if (innerWidth >= LARGE_SCREEN_WIDTH)
  header.setAttribute("data-nav-status", "SHOWN");

openMenuBtn.addEventListener("click", () => {
  header.setAttribute("data-nav-status", "SHOWN");
  lastNavStatus = "SHOWN";
});

closeMenuBtn.addEventListener("click", () => {
  header.setAttribute("data-nav-status", "HIDDEN");
  lastNavStatus = "HIDDEN";
});

window.addEventListener("resize", () => {
  const status = innerWidth >= LARGE_SCREEN_WIDTH ? "SHOWN" : lastNavStatus;
  header.setAttribute("data-nav-status", status);
});
