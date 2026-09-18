const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-img");
const closeButton = document.querySelector(".close");

galleryImages.forEach(function(image) {
    image.addEventListener("click", function() {
        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;
        lightbox.style.display = "flex";
    });
});

closeButton.addEventListener("click", function() {
    lightbox.style.display = "none";
});

lightbox.addEventListener("click", function(event) {
    if (event.target === lightbox) {
        lightbox.style.display = "none";
    }
});