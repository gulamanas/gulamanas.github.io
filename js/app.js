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

  let isDarkMode = localStorage.getItem('darkMode') === 'true';
  console.log(typeof isDarkMode);

  if (localStorage.getItem('darkMode') === null) {
    isDarkMode = true;
    localStorage.setItem('darkMode', 'true');
  }

  function toggleDarkMode(isDark) {
    const bgColor = isDark ? 'var(--dark)' : 'var(--light)';
    const textPrimary = isDark ? 'var(--light)' : 'var(--dark)';
    const textSpan = isDark ? '#0087ca' : '#3ebfff';
    const bgInput = isDark ? '#343434' : '#ebf4f2';
    const bgInvert = isDark ? 'var(--light)': 'var(--dark)';

    root.style.setProperty('--bg-color', bgColor);
    root.style.setProperty('--text-primary', textPrimary);
    root.style.setProperty('--text-span', textSpan);
    root.style.setProperty('--bg-input', bgInput);
    root.style.setProperty('--bg-invert', bgInvert);

    dayNightButton.classList.toggle('fa-sun', !isDark);
    dayNightButton.classList.toggle('fa-moon', isDark);
  }

  toggleDarkMode(isDarkMode);

  dayNightButton.addEventListener('click', function () {
    isDarkMode = !isDarkMode;
    toggleDarkMode(isDarkMode);
    localStorage.setItem('darkMode', isDarkMode.toString());
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
