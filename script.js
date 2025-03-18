const themeToggleButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const currentTheme = localStorage.getItem('theme');

function isMobile() {
    return window.innerWidth <= 768; 
}

if (isMobile()) {
    themeToggleButton.style.display = 'none';
} else if (currentTheme) {
    document.body.setAttribute('data-theme', currentTheme);
    themeIcon.textContent = currentTheme === 'dark' ? 'light_mode' : 'dark_mode';
}


if (!isMobile() && currentTheme) {
    document.body.setAttribute('data-theme', currentTheme);
    themeIcon.textContent = currentTheme === 'dark' ? 'light_mode' : 'dark_mode';
}

themeToggleButton.addEventListener('click', () => {
    if (isMobile()) return;

    let currentMode = document.body.getAttribute('data-theme');
    let newMode = currentMode === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', newMode);
    localStorage.setItem('theme', newMode);
    themeIcon.textContent = newMode === 'dark' ? 'light_mode' : 'dark_mode';
});

const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

closeMenu.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
});


// Popup

document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".stack-item img");
    const popup = document.getElementById("popup");
    const popupText = document.getElementById("popup-text");
    const closePopup = document.querySelector(".popup .close");

    images.forEach(img => {
        img.addEventListener("click", function () {
            popupText.textContent = img.getAttribute("data-info");
            popup.style.display = "flex";
        });
    });

    closePopup.addEventListener("click", function () {
        popup.style.display = "none";
    });

    popup.addEventListener("click", function (e) {
        if (e.target === popup) {
            popup.style.display = "none";
        }
    });
});
