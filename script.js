/* =========================================
   KHEVNA UGC PORTFOLIO
   JavaScript
========================================= */


/* ---------- PORTFOLIO FILTERS ---------- */

const filterButtons = document.querySelectorAll(".filter-button");
const portfolioCards = document.querySelectorAll(".portfolio-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active state from all buttons
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Add active state to clicked button
        button.classList.add("active");

        const selectedCategory = button.dataset.filter;

        portfolioCards.forEach(card => {

            const cardCategory = card.dataset.category;

            if (
                selectedCategory === "all" ||
                cardCategory === selectedCategory
            ) {
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
            }

        });

    });

});


/* ---------- NAVBAR SHADOW ON SCROLL ---------- */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 4px 25px rgba(17, 17, 17, 0.08)";
    } else {
        navbar.style.boxShadow = "none";
    }

});


/* ---------- FADE-IN ANIMATION ---------- */

const animatedElements = document.querySelectorAll(
    ".section, .service-card, .portfolio-card, .why-card, .case-study"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);

animatedElements.forEach(element => {
    element.classList.add("fade-element");
    observer.observe(element);
});


/* ---------- CLOSE MOBILE LINK AFTER CLICK ---------- */

const navLinks = document.querySelectorAll(".navbar nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        window.scrollTo({
            top: window.scrollY,
            behavior: "smooth"
        });

    });

});


/* ---------- CURRENT YEAR ---------- */

const year = new Date().getFullYear();

const footerYear = document.querySelector("footer span");

if (footerYear) {
    footerYear.textContent =
        `© ${year} Khevna. All rights reserved.`;
}
