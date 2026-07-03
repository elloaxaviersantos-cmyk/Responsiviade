const menuToggle = document.getElementById('menuToggle');
const menuNav = document.getElementById('menuNav');

if (menuToggle && menuNav) {
    menuToggle.addEventListener('click', () => {
        menuNav.classList.toggle('is-open');

        const estaAberto = menuNav.classList.contains('is-open');
        menuToggle.setAttribute('aria-expanded', String(estaAberto));
    });
}
