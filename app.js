const burger = document.querySelector('.burger')
const navItem = document.querySelector('.nav_list')

burger.addEventListener('click', slideMenu)

function slideMenu() {
    burger.classList.toggle('switch')
    navItem.classList.toggle('nav_slider')
}
