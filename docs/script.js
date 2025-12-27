let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide(i) {
    slides.forEach((slide, idx) => {
        slide.classList.remove("active");
        if (idx === i) slide.classList.add("active");
    });
}

function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
}

// Cambiar cada 8 segundos
setInterval(nextSlide, 5000);
