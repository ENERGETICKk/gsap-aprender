import { gsap } from "gsap";


gsap.from(".bento-grid", {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "expo.out"
})




let tl = gsap.timeline();
tl.from(".bloque", {
    y: 200,
    duration: 1,
    opacity: 0,
    ease: "power3.out",
    stagger: 0.3
});

