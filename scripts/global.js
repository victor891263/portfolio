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



// mobile navigation bar appearing/disappearing based on scroll logic

const header = document.querySelector("header");

// keep track of the previous scroll position
let previousScrollPosition = window.pageYOffset;

// add an event listener to handle scrolling
window.addEventListener('scroll', function() {
    // get the current scroll position
    const currentScrollPosition = window.pageYOffset;

    // if the user is scrolling up, show the fixed element. if the user is scrolling down, hide the fixed element
    if (currentScrollPosition < previousScrollPosition) header.style.transform = "translateY(0)";
    else header.style.transform = "translateY(-100%)";

    // update the previous scroll position
    previousScrollPosition = currentScrollPosition;
});



// toggling visibility of mobile navigation menu logic

document.querySelector("#toggle-mobile-menu").addEventListener("click", () => {
    if (root.getAttribute("data-mobile-nav") === "hidden") root.setAttribute("data-mobile-nav", "visible");
    else root.setAttribute("data-mobile-nav", "hidden");
});