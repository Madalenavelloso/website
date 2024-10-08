const centeredWord = document.querySelector('.centered-word');
const sequenceWords = document.querySelector('.sequence-words');

// Show words when hovering over the main word
centeredWord.addEventListener('mouseenter', () => {
    sequenceWords.style.opacity = 1; // Show words
});

// Hide words when leaving both areas
document.addEventListener('mouseleave', (event) => {
    if (!centeredWord.contains(event.target) && !sequenceWords.contains(event.target)) {
        sequenceWords.style.opacity = 0; // Hide words when leaving
    }
});

// Prevent hiding on mouse enter for sequence words
sequenceWords.addEventListener('mouseenter', () => {
    sequenceWords.style.opacity = 1; // Keep words visible
});

// Hide words on click (optional)
sequenceWords.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent bubbling to body
    sequenceWords.style.opacity = 0; // Hide words when clicked
});


