const navbarHamburger = document.querySelector('.hamburger-menu');
const navbarNavMenu = document.querySelector('.nav');

navbarHamburger.addEventListener('click', () => navbarNavMenu.classList.toggle('active'));
