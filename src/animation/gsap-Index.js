import { gsap } from "gsap";


gsap.from(".introduccion h1", {
    x: 200,
    opacity:0,
    duration: 1,
    ease: "power3.out"
})

gsap.from(".introduccion h5", {
    y: -200,
    opacity:0,
    duration: 2,
    stagger: 1,
    ease: "power3.out"
})

gsap.from(".introduccion p", {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
})

gsap.from(".frase li", {
    opacity: 0,
    x: -200,
    ease: "power3.out",
    duration: 2,
    stagger: 0.6
})

gsap.from(".hero", {
    opacity: 0,
    delay: 3
})

gsap.from(".titulo", {
    scale: 0,
    opacity: 0,
    duration: 1,
    delay: 4
})


gsap.from(".contenedor-cajas div", {
    x: () => gsap.utils.random(-500, 500),
    y: () => gsap.utils.random(-500, 500),
    duration: 1.3,
    delay: 4,
    ease: "elastic.out",
    opacity: 0,
    stagger: .6
})

// gsap.from(".uno", {
// 	x: () => gsap.utils.random(-500, 500),
// 	y: () => gsap.utils.random(-300, 300),
// 	opacity: 0,
// 	duration: 1,
//     delay: 4,
//     ease: "elastic.out"
// });

// gsap.from(".dos", {
// 	x: () => gsap.utils.random(-500, 500),
// 	y: () => gsap.utils.random(-300, 300),
// 	opacity: 0,
// 	duration: 1,
//     delay: 4,
//     ease: "elastic.out"
// });

// gsap.from(".tres", {
// 	x: () => gsap.utils.random(-800, 800),
// 	y: () => gsap.utils.random(-800, 800),
// 	duration: 2,
//     delay: 4,
//     ease: "elastic.out"
// });


const botonAnimar = document.getElementById("boton-animar");

botonAnimar.addEventListener("click", function(){
    gsap.from(".contenedor-cajas div", {
        x: () => gsap.utils.random(-500, 500),
        y: () => gsap.utils.random(-500, 500),
        duration: 1.3,
        ease: "elastic.out",
        opacity: 0,
        stagger: .6
    })
})




