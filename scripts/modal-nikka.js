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
/* Modal(); */