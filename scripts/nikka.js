// Slider top start
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Dot controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {

    const images = document.getElementsByClassName("carousel__img");
    const dots = document.getElementsByClassName("carousel__dot");

    // Sikrer at slideIndex forbliver indenfor antallet af billeder
    if (n > images.length) {
        slideIndex = 1;
    }

    // Sørger for slideIndex sættes til sidste billede hvis det kommer under første billede
    if (n < 1) {
        slideIndex = images.length
    }

    // Looper gennem imagges array og skjuler alle elementerne
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }

    // Fjerner active klassen fra alle dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("carousel__dot--active");
    }

    // Viser ét billede ved at sætte displey style til block
    images[slideIndex-1].style.display = "block"
    dots[slideIndex-1].classList.add("carousel__dot--active");
}