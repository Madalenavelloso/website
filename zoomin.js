window.onload = function() {
  const carouselContainer = document.querySelector('.carousel-container');
  const cards = document.querySelectorAll('.card');
  let isHovered = false;

  function moveCarousel() {
      if (!isHovered) {
          carouselContainer.scrollLeft += 1;
          if (carouselContainer.scrollLeft >= carouselContainer.scrollWidth - carouselContainer.clientWidth) {
              carouselContainer.scrollLeft = 0;
          }
      }
      requestAnimationFrame(moveCarousel);
  }

  cards.forEach(card => {
      card.addEventListener('mouseover', () => {
          isHovered = true;
      });
      card.addEventListener('mouseout', () => {
          isHovered = false;
      });
  });

  moveCarousel();
};


