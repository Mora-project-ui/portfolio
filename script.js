const animatedElements = document.querySelectorAll(
    ".project-card, .Technologies-list span, .contact-links span"
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
