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

document.querySelectorAll(".nav-branding").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    navItem.classList.remove("active");
    
  })
);

// Get the button
let mybutton = document.getElementById("myBtn");
let mybutton2 = document.getElementById("myBtn2");
let mybutton3 = document.getElementById("myBtn3");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    mybutton2.style.display = "block";
    mybutton3.style.display = "block";
  } else {
    mybutton.style.display = "none";
    mybutton2.style.display = "none";
    mybutton3.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//SERVICES ENLARGE

