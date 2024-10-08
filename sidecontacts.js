// script.js

// Get elements
const contactsTab = document.getElementById('contacts-tab');
const contactSection = document.getElementById('contact-section');
const closeButton = document.getElementById('close-button');

// Event listener to show contact section
contactsTab.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    contactSection.classList.add('active'); // Add class to slide in
});

// Event listener to close the contact section
closeButton.addEventListener('click', function() {
    contactSection.classList.remove('active'); // Remove class to slide out
});
