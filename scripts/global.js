// theme switching button

const root = document.documentElement;

document.querySelector("#theme-button").addEventListener("click", () => {
    if (root.getAttribute("data-theme") === "light") root.setAttribute("data-theme", "dark");
    else root.setAttribute("data-theme", "light");
});



// check system theme (if its dark mode or light mode)

if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    root.setAttribute("data-theme", "dark");
}



// scroll-in animations logic

// determine offset value based on viewport height
let viewOffset = window.outerHeight / 8;

// update offset value if viewport height changes
window.addEventListener("resize", () => {
    viewOffset = window.outerHeight / 8;
});

// get the elements to animate
const elementsToAnimate = document.querySelectorAll(".animated");

// create an observer instance
const observer = new IntersectionObserver((entries) => {
    // loop through each observed element
    entries.forEach((entry) => {
        // if the element is in the viewport, animate it
        if (entry.isIntersecting) entry.target.classList.add("animate");
    });
}, {
    root: document,
    rootMargin: `0px 0px -${viewOffset}px 0px`
});

// start observing the elements
elementsToAnimate.forEach((element) => observer.observe(element));



// toggling visibility of mobile navigation menu logic

document.querySelector("#toggle-mobile-menu").addEventListener("click", () => {
    if (root.getAttribute("data-mobile-nav") === "hidden") root.setAttribute("data-mobile-nav", "visible");
    else root.setAttribute("data-mobile-nav", "hidden");
});