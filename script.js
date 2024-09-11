

document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.querySelector('nav');
    const heroImage = document.querySelector('.hero-image img');

    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? '🌕' : '🌙';
    });

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('active');
    });

    heroImage.addEventListener('click', function() {
        window.location.href = 'index.html'; 
    });
});
