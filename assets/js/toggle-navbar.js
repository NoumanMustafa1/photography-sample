function toggleDarkMode() {
    const hour = new Date().getHours();
    const navbar = document.getElementById('navbar');
    if (hour >= 18 || hour < 6) {
        navbar.setAttribute('data-theme', 'dark');
    } else {
        navbar.removeAttribute('data-theme');
    }
}

toggleDarkMode();
window.addEventListener('resize', toggleDarkMode);

const burgerMenu = document.getElementById('burger-menu');
const navLinks = document.querySelector('.nav-links');
burgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});