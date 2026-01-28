import { gsap } from "gsap";



//! Apartado de Gsap Animations
//! From
gsap.from("header",{
    y: -200,
    duration: 1
})

gsap.from(".nav-links a", {
    y:-60,
    opacity: 0,
    duration: .5,
    stagger: 0.2,
    delay: .5
})

gsap.from("#logo", {
    x: -500,
    duration: 2,
    ease: "elastic.out"
})