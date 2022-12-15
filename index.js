
// add padding

const navTop = document.querySelector("nav.top");
const heroSection = document.querySelector("#hero");
heroSection.style.paddingTop = `${navTop.clientHeight}px`;



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



// contact form logic

// initialize emailjs sdk with public key
emailjs.init('66ecQITsSp3cRIEAd');

// function that sends email
document.querySelector('#connect form').addEventListener('submit', function (event) {
    event.preventDefault();

    // these IDs from the previous steps
    emailjs.sendForm('service_cdaqthh', 'template_nak7yxt', this)
        .then(() => {
            console.log('SUCCESS!');
        }, (error) => {
            console.log('FAILED...', error);
        });
});



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



// mobile navigation bar appearing/disappearing based on scroll logic

// keep track of the previous scroll position
let previousScrollPosition = window.pageYOffset;

// add an event listener to handle scrolling
window.addEventListener('scroll', function() {
    // get the current scroll position
    const currentScrollPosition = window.pageYOffset;

    // if the user is scrolling up, show the fixed element. if the user is scrolling down, hide the fixed element
    if (currentScrollPosition < previousScrollPosition) navTop.style.transform = "translateY(0)";
    else navTop.style.transform = "translateY(-100%)";

    // update the previous scroll position
    previousScrollPosition = currentScrollPosition;
});



// toggling visibility of mobile navigation menu logic

document.querySelector("#toggle-mobile-menu").addEventListener("click", () => {
    if (root.getAttribute("data-mobile-nav") === "hidden") root.setAttribute("data-mobile-nav", "visible");
    else root.setAttribute("data-mobile-nav", "hidden");
});



// textarea auto-expand logic

document.querySelector("#connect textarea").addEventListener("input", (e) => {
    e.target.style.height = "";
    e.target.style.height = (e.target.scrollHeight) + "px";
});









/*
const sections = ["about", "projects", "skills", "connect"];

sections.forEach(section => {
    const element = document.getElementById(section);
    element.style.height = String(element.offsetHeight + (window.outerHeight * 0.5)) + 'px';

    window.addEventListener("resize", () => {
        element.style.height = '';
        element.style.height = String(element.offsetHeight + (window.outerHeight * 0.5)) + 'px';
    });

    window.addEventListener("scroll", () => {
        element.style.opacity = String((window.scrollY - element.offsetTop) / 200);
    });
});

 */