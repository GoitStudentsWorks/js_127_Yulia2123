

const openMobileMenuBtn = document.querySelector('[data-menu-open]');
const closeMobileMenuBtn = document.querySelector('[data-menu-close]');
const mobileMenu = document.querySelector('[data-menu]');
const desktopMediaMatch = window.matchMedia('(min-width: 1440px)');

const handleDesktopChange = (e) => {
    if (e.matches && mobileMenu.classList.contains('is-open')) mobileMenu.classList.remove('is-open');
}

const openMobileMenu = () => {
    mobileMenu.classList.add('is-open');
}

const closeMobileMenu = () => {
    mobileMenu.classList.remove('is-open');
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMobileMenu();
    
});

// для того щоб якщо меню відрите і ми єкран робимо 1440 меню закривається
desktopMediaMatch.addEventListener('change', handleDesktopChange);

openMobileMenuBtn.addEventListener('click', openMobileMenu);

mobileMenu.addEventListener('click', (event) => {
   
    if (event.target.closest('a') || event.target.closest('[data-menu-close]')) closeMobileMenu();
});





