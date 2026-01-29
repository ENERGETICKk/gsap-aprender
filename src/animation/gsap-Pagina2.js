import {gsap} from "gsap";


gsap.from(".bento-grid", {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "expo.out"
})

let tl = gsap.timeline()

tl.from(".uno", {
    y: 200,
    duration: .3,
    ease: "power3.out",
    opacity: 0
}).from(".dos",{
    y: 200,
    duration: .3,
    ease: "power3.out",
    opacity: 0
}).from(".tres",{
    y: 200,
    duration: .3,
    ease: "power3.out",
    opacity: 0
}).from(".cuatro", {
    y: 200,
    duration: .3,
    ease: "power3.out",
    opacity: 0
})