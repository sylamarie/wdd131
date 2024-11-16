// Update the current year in the footer
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Update the last modified date in the footer
document.getElementById('lastModified').textContent = 'Last modified: ' + document.lastModified;

// Hamburger menu functionality for mobile view
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close the hamburger menu when a link is clicked
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));
