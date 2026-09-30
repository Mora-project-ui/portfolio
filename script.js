// ========================================
// SCROLL REVEAL ANIMATION
// ========================================

const animatedElements = document.querySelectorAll(
    ".project-card, .Technologies-list span, .contact-links span, .reveal-section"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});

animatedElements.forEach((element) => {
    observer.observe(element);
});


// ========================================
// STICKY HEADER
// ========================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


// ========================================
// BACKGROUND MUSIC
// ========================================

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

        musicIcon.textContent = "🎵";
        musicToggle.classList.remove("playing");

    }

});


// ========================================
// NAVIGATION MENU
// ========================================

const menuToggle = document.querySelector("#menu-toggle");
const menuClose = document.querySelector("#menu-close");
const navMenu = document.querySelector(".nav-menu");

let menuOpenScroll = 0;


// OPEN MENU
menuToggle.addEventListener("click", () => {

    menuOpenScroll = window.scrollY;

    navMenu.classList.add("open");

});


// CLOSE MENU
menuClose.addEventListener("click", () => {

    navMenu.classList.remove("open");

    navMenu.style.top = "0px";

});


// MAKE MENU FOLLOW PAGE SCROLL
window.addEventListener("scroll", () => {

    if (!navMenu.classList.contains("open")) {
        return;
    }

    const scrollDifference =
        window.scrollY - menuOpenScroll;

    navMenu.style.top =
        `${-scrollDifference}px`;

});


// ========================================
// SCROLL PROGRESS
// ========================================

const scrollProgress = document.querySelector("#scroll-progress");

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    if (documentHeight <= 0) {
        scrollProgress.style.width = "0%";
        return;
    }

    const scrollPercent =
        (scrollTop / documentHeight) * 100;

    scrollProgress.style.width =
        `${scrollPercent}%`;

});
