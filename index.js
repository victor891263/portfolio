gsap.registerPlugin(ScrollTrigger);

gsap.from("#hero", {
    opacity: 0,
    ease: "none",
    duration: 1,
});

gsap.from("#about", {
    opacity: 0,
    ease: "none",
    scrollTrigger: {
        trigger: "#about",
        start: "bottom bottom",
        end: "bottom center",
        scrub: true,
        pin: true,
        pinSpacing: false,
        toggleActions: "restart none none none"
    }
});

gsap.from("#projects", {
    opacity: 0,
    ease: "none",
    scrollTrigger: {
        trigger: "#projects",
        start: "bottom bottom",
        end: "bottom center",
        scrub: true,
        pin: true,
        toggleActions: "restart none none none"
    }
});

gsap.from("#skills", {
    opacity: 0,
    ease: "none",
    scrollTrigger: {
        trigger: "#skills",
        start: "bottom bottom",
        end: "bottom center",
        scrub: true,
        pin: true,
        toggleActions: "restart none none none"
    }
});