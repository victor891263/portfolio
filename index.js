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