const carouselInner = document.querySelector('.carousel-inner');
const carouselImages = document.querySelectorAll('.carousel-image');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');

let currentIndex = 0;

function showImage(index) {
    const imageWidth = carouselImages[0].clientWidth;
    carouselInner.style.transform = `translateX(-${index * imageWidth}px)`;
}

arrowRight.addEventListener('click', () => {
    if (currentIndex < carouselImages.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    showImage(currentIndex);
});

arrowLeft.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = carouselImages.length - 1;
    }
    showImage(currentIndex);
});

window.addEventListener('resize', () => {
    showImage(currentIndex);
});
