const images = [
    'assets/images/idiots-s01e01.png',
    'assets/images/idiots-s01e02.jpg',
    // 'assets/images/idiots-s01e03.png',
    'assets/images/idiots-s01e04.png',
    'assets/images/idiots-s01e05.png',
    'assets/images/idiots-s01e06.png',
    'assets/images/idiots-s01e07.png',
];

let currentIndex = 0;

window.onload = function() {
    const slide = document.getElementById('bg-slide');
    slide.style.transition = 'opacity 1s';

    function changeSlide() {
        slide.style.opacity = 0; // Fade out
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % images.length;
            slide.src = images[currentIndex];
            slide.style.opacity = 1; // Fade in
        }, 1000); // Matches the transition duration
    }

    // Change slides every 5 seconds
    setInterval(changeSlide, 10000);
};