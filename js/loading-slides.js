const images = [
    'assets/images/idiots-s01e01.jpg',
    'assets/images/idiots-s01e02.jpg',
    // 'assets/images/idiots-s01e03.jpg',
    'assets/images/idiots-s01e04.jpg',
    'assets/images/idiots-s01e05.jpg',
    'assets/images/idiots-s01e06.jpg',
    'assets/images/idiots-s01e07.jpg',
    'assets/images/idiots-fate-devoid-typical.jpg',
    'assets/images/michaelsoft-binbows.jpg',
    // 'assets/images/idiots-s02e01.jpg',
    'assets/images/idiots-s02e02.jpg',
    'assets/images/ssasr.jpg',
    'assets/images/idiots-s02e03.jpg',
    'assets/images/idiots-s02e04.jpg',
    'assets/images/idiots-s02e06.jpg',
];

let currentIndex = 0;

window.onload = function() {
    const container = document.querySelector('.bg-slideshow');

    // Create two img elements (using let so we can swap their roles later)
    let img1 = document.createElement('img');
    let img2 = document.createElement('img');

    // Set the initial sources
    img1.src = images[currentIndex];
    img2.src = images[(currentIndex + 1) % images.length];

    // Assign the id "bg-slide" to each (note: duplicate IDs aren't ideal, but kept per your requirement)
    img1.id = 'bg-slide';
    img2.id = 'bg-slide';

    // Set initial opacity and transitions
    img1.style.opacity = '1';
    img2.style.opacity = '0';
    img1.style.transition = 'opacity 1s';
    img2.style.transition = 'opacity 1s';

    // Ensure images overlay each other
    [img1, img2].forEach(img => {
        img.style.position = 'absolute';
        img.style.top = '0';
        img.style.left = '0';
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'cover';
    });

    container.appendChild(img1);
    container.appendChild(img2);

    function changeSlide() {
        // Preload the next image using a temporary Image object
        const nextIndex = (currentIndex + 1) % images.length;
        let preloadImage = new Image();
        preloadImage.src = images[nextIndex];

        preloadImage.onload = function() {
            // Start the crossfade transition
            img1.style.opacity = '0';
            img2.style.opacity = '1';

            // After the transition duration, swap the roles
            setTimeout(() => {
                currentIndex = nextIndex;

                // Swap img1 and img2 references
                let temp = img1;
                img1 = img2;
                img2 = temp;

                // Set up the hidden image (img2) with the upcoming image
                const upcomingIndex = (currentIndex + 1) % images.length;
                img2.src = images[upcomingIndex];
                img2.style.opacity = '0';
            }, 1000); // 1000ms matches the opacity transition duration
        };
    }

    setInterval(changeSlide, 7500);
};
