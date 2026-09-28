const animatedElements = document.querySelectorAll(
    ".project-card, .Technologies-list span, .contact-links span, .reveal-section"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});

animatedElements.forEach(element => {
    observer.observe(element);
});

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});
