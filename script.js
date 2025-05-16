// Select the necessary elements
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Create the close button dynamically
const closeButton = document.createElement('button');
closeButton.textContent = '✖'; // Close symbol
closeButton.classList.add('close-button');

// Add close button to navigation menu
navLinks.insertAdjacentElement('afterbegin', closeButton);

// Show navigation menu when the menu toggle is clicked
menuToggle.addEventListener('click', () => {
  navLinks.classList.add('active');
});

// Hide navigation menu when the close button is clicked
closeButton.addEventListener('click', () => {
  navLinks.classList.remove('active');
});

