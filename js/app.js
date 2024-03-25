const burger = document.querySelector('.burger');
const navItem = document.querySelector('.nav_list');

burger.addEventListener('click', slideMenu);

function slideMenu() {
  navItem.classList.toggle('nav_slider');
  burger.classList.toggle('switch');
}

// Dark Light Mode ----->

document.addEventListener('DOMContentLoaded', function () {
  const dayNightButton = document.getElementById('dayNightButton');
  const root = document.documentElement;
  const mainElement = document.querySelector('.main');

  const isDarkMode = localStorage.getItem('darkMode') === 'true';

  function toggleDarkMode(isDark) {
    const bgColor = isDark ? 'var(--dark)' : 'var(--light)';
    const textPrimary = isDark ? 'var(--light)' : 'var(--dark)';
    const textSpan = isDark ? '#0087ca' : '#3ebfff';
    const bgInput = isDark ? '#343434' : '#ebf4f2';
    const backgroundImage = isDark
      ? 'url(/images/dark_background.jpg)'
      : 'url(/images/light_background.jpg)';

    root.style.setProperty('--bg-color', bgColor);
    root.style.setProperty('--text-primary', textPrimary);
    root.style.setProperty('--text-span', textSpan);
    root.style.setProperty('--bg-input', bgInput);
    mainElement.style.background = backgroundImage;

    dayNightButton.classList.toggle('fa-sun', !isDark);
    dayNightButton.classList.toggle('fa-moon', isDark);
  }

  toggleDarkMode(isDarkMode);

  dayNightButton.addEventListener('click', function () {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    toggleDarkMode(!isDarkMode);
    localStorage.setItem('darkMode', !isDarkMode);
  });
});

// Get year
const d = new Date();
const year = document.getElementById('year');
year.innerHTML = d.getFullYear();

// AOS Animation
AOS.init({
  // once: true,
  duration: 1000,
  disable: 'mobile',
});
