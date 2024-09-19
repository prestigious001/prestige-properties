const carousel = document.getElementById('carousel');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let index = 0;

const showSlide = (index) => {
    const width = carousel.clientWidth;
    carousel.style.transform = `translateX(-${index * width}px)`;
};

nextBtn.addEventListener('click', () => {
    index = (index + 1) % 3; // There are 3 slides
    showSlide(index);
});

prevBtn.addEventListener('click', () => {
    index = (index - 1 + 3) % 3;
    showSlide(index);
});

// Automatically move to the next slide every 5 seconds
setInterval(() => {
    index = (index + 1) % 3;
    showSlide(index);
}, 5000);






// Toggle mobile menu visibility
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('menu-hidden');
            mobileMenu.classList.toggle('menu-visible');
        });