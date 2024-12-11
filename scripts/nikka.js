function Modal () {
    // Get the modal
    const modal = document.getElementById("modal__booktime");

    // Get the button that opens the modal
    const btn = document.getElementById("btn__booktime");

    // Get the <span> element that closes the modal
    const span = document.getElementsByClassName("modal__close")[0];

    // When the user clicks on the button, open the modal
    btn.onclick = function() {
        modal.style.display = "flex";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
};
Modal();


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
    // Variabel der holder styr på hvilket billede der vises
    let i;

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
    for (i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }

    // Fjerner active klassen fra alle dots
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("carousel__dot--active");
    }

    // Viser ét billede ved at sætte displey style til block
    images[slideIndex-1].style.display = "block"
    dots[slideIndex-1].classList.add("carousel__dot--active");
}