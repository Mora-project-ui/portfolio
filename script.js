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

const music = document.querySelector("#background-music");
const musicToggle = document.querySelector("#music-toggle");
const musicIcon = document.querySelector(".music-icon");

musicToggle.addEventListener("click", () => {

    if (music.paused) {

        music.play();

        musicIcon.textContent = "🔊";
        musicToggle.classList.add("playing");

    } else {

        music.pause();

        musicIcon.textContent = "🔇";
        musicToggle.classList.remove("playing");

    }

});
