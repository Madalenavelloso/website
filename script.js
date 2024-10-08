// Get the circle-cursor element
const circleCursor = document.querySelector('.circle-cursor');

// Update the position of the circle cursor on mouse move
document.addEventListener('mousemove', (e) => {
    circleCursor.style.left = `${e.pageX - 15}px`; // Center the circle horizontally
    circleCursor.style.top = `${e.pageY - 15}px`;  // Center the circle vertically
});


