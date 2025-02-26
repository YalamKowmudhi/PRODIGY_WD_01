document.addEventListener("DOMContentLoaded", function () {
    const slide = document.querySelector(".carousel-slide");
    const images = document.querySelectorAll(".carousel-slide img");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    let currentIndex = 0;
    const totalImages = images.length;
    const imageWidth = images[0].clientWidth; // Get image width dynamically

    // Function to move the slide
    function updateCarousel() {
        slide.style.transform = `translateX(${-currentIndex * imageWidth}px)`;
    }

    // Next button functionality
    nextBtn.addEventListener("click", function () {
        if (currentIndex < totalImages - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Loop back to first image
        }
        updateCarousel();
    });

    // Previous button functionality
    prevBtn.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalImages - 1; // Loop to last image
        }
        updateCarousel();
    });

    // Auto-slide every 5 seconds (Optional)
    setInterval(() => {
        if (currentIndex < totalImages - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    }, 5000); // Adjust time (5000ms = 5 seconds)
});
