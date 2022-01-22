const burger = document.querySelector('.burger')
const navItem = document.querySelector('.nav_list')

burger.addEventListener('click', slideMenu)

function slideMenu() {
    navItem.classList.toggle('nav_slider')
    burger.classList.toggle('switch')
}
