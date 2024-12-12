function Accordion() {
    const acc = document.getElementsByClassName("accordion__btn");

    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            
            const panel = this.nextElementSibling;
            const arrow = this.querySelector(".accordion__arrow");

            if (panel.style.display === "block") {
                panel.style.display = "none";
                arrow.style.transform = "translateY(-50%) rotate(45deg)";
            } else {
                panel.style.display = "block";
                arrow.style.transform = "translateY(-50%) rotate(-135deg)";
            }
        });
    }
}
Accordion();
