// Hent alle accordion-knapperne i sektionen
document.querySelectorAll('.accordion__btn').forEach(button => {
    button.addEventListener('click', () => {
        // Toggle status på den valgte accordion
        const panel = button.nextElementSibling;
        const isActive = panel.style.maxHeight;

        // Luk alle paneler
        document.querySelectorAll('.accordion__panel').forEach(p => {
            p.style.maxHeight = null;
            p.parentElement.classList.remove('active');
        });

        // Hvis panelet ikke allerede er aktivt, åbn det
        if (!isActive) {
            panel.style.maxHeight = panel.scrollHeight + 'px';
            button.parentElement.classList.add('active');
        }
    });
});