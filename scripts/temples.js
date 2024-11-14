// temples.js

// Update the current year in the footer
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Update the last modified date in the footer
document.getElementById('lastModified').textContent = 'Last modified: ' + document.lastModified;

// Hamburger menu functionality for mobile view
const hamburger = document.getElementById('hamburger'); // The hamburger button
const navMenu = document.querySelector('nav ul'); // The navigation menu

hamburger.addEventListener('click', () => {
    // Toggle the visibility of the menu items
    navMenu.classList.toggle('active');

    // Change the hamburger icon to an 'X' when the menu is open
    hamburger.classList.toggle('open');
});