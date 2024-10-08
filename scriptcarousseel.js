document.addEventListener("DOMContentLoaded", function () {
    const scrollContainer = document.querySelector('.scroll-container');

    // Adjust sensitivity by controlling scroll amount
    scrollContainer.addEventListener('wheel', (e) => {
        e.preventDefault();
        // Scroll by a smaller amount for less sensitivity (e.g., 100px)
        scrollContainer.scrollBy({
            left: e.deltaY < 0 ? -100 : 100, // Adjust sensitivity here (100px)
            behavior: 'smooth'               // Smooth scrolling behavior
        });
    });
});


// Select all the cards
const cards = document.querySelectorAll('.card');
const backgroundOverlay = document.querySelector('.background-overlay');

// Loop through each card and add event listeners for hover (mouseenter and mouseleave)
cards.forEach(card => {
    // On hover (mouseenter), change the background
    card.addEventListener('mouseenter', () => {
        const backgroundImage = card.getAttribute('data-background');
        backgroundOverlay.style.backgroundImage = `url(${backgroundImage})`;
        backgroundOverlay.style.opacity = '1'; // Show the overlay
    });

    // On hover out (mouseleave), reset the background to default or blank
    card.addEventListener('mouseleave', () => {
        backgroundOverlay.style.opacity = '0'; // Hide the overlay
    });
});




