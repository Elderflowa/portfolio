const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navFade = document.querySelector(".nav-menu-fade");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  navFade.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    navItem.classList.remove("active");
    
  })
);
