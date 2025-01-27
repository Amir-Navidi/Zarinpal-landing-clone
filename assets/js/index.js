// scroll to section
document.querySelector(".header-scroll-down").addEventListener("click", () => {
  document.querySelector(".gateway").scrollIntoView({ behavior: "smooth" });
});

// navbar fix-top on scroll
window.onscroll = function () {
  myFunction();
};

var navbar = document.querySelector("nav");

var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
}

// alert
var customAlert = document.querySelector(".custom-alert");

document
  .querySelector(".custom-alert .btn-close")
  .addEventListener("click", () => {
    customAlert.classList.remove("show");
  });

function showAlert() {
  customAlert.classList.add("show");
}

window.onload = function () {
  setTimeout(showAlert, 5000);
};

// nav toggler
var closeBtn = document.querySelector(".toggler-menu .btn-close");
var menu = document.querySelector(".toggler-menu");
var menuBackground = document.querySelector(".toggler-menu-background");
var sidebarBtn = document.querySelector(".nav-toggler");

sidebarBtn.addEventListener("click", () => {
  menuBackground.style.display = "block";
  menu.classList.add("show");
  document.body.style.overflowY = "hidden";
});

document.addEventListener("click", (event) => {
  if (
    (!menu.contains(event.target) && menuBackground.contains(event.target)) ||
    closeBtn.contains(event.target)
  ) {
    menuBackground.style.display = "none";
    menu.classList.remove("show");
    document.body.style.overflowY = "scroll";
  }
});
