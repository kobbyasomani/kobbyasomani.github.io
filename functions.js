// Store the menu elemtns as variables for easy selection
const navMainOverlay = document.querySelector('#nav-main__mobile-overlay'); // Full-screen overlay
const navMain = document.querySelector('#nav-main'); // Navigation bar
const navMainOpen = document.querySelector('#nav-main__mobile-open'); // Open menu button
const navMainClose = document.querySelector('#nav-main__mobile-close'); // Close menu button
const main = document.querySelector('main'); // Main
const footer = document.querySelector('footer'); // Footer

// Array of elements whose layout must change in mobile mode
const elementsList = [
    navMain,
    navMainOverlay,
    main,
    footer
]

// Show the full-screen mobile nav bar when the hamburger menu is clicked
navMainOpen.addEventListener('click', function () {
    elementsList.forEach(element => element.classList.add('mobile-mode'));
})

navMainClose.addEventListener('click', function () {
    elementsList.forEach(element => element.classList.remove('mobile-mode'));
})