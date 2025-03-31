document.addEventListener("DOMContentLoaded", function() {
    console.log("Página cargada correctamente");

    const sections = document.querySelectorAll(".section");

    function checkVisibility() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                section.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
});