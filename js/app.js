const burger = document.querySelector(".burger");
const navItem = document.querySelector(".nav_list");

burger.addEventListener("click", slideMenu);

function slideMenu() {
  navItem.classList.toggle("nav_slider");
  burger.classList.toggle("switch");
}

// Get year
const d = new Date();
const year = document.getElementById("year");
year.innerHTML = d.getFullYear();

// AOS Animation
AOS.init({
  once: true,
  duration: 1000,
  disable: "mobile",
});
