const images = [
    "20240125_150154.jpg",
    "20240125_005905.jpg",
    "20240125_010140.jpg"
];

let currentIndex = 0;
const imageContainer = document.querySelector('.image-container');
const imageElements = document.querySelectorAll('.image-container img');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});

function updateImage() {
    imageContainer.style.display = 'none';

    imageElements.forEach((img, index) => {
        if (index === currentIndex) {
            img.style.display = 'block';
        } else {
            img.style.display = 'none';
        }
    });

    imageContainer.style.display = 'block';
}
updateImage();
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
