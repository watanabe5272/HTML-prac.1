document.addEventListener("mousemove", (e) => {

    mouseX = e.clientX
    mouseY = e.clientY

    gsap.set(".cursor", {
        x: mouseX,
        y: mouseY,
    })

    gsap.to(".sub-cursor", {
        x: mouseX,
        y: mouseY,
    })
})

ScrollReveal().reveal('.letter', {
    reset: true,
    delay: 2200,
    duration: 2500,
    distance: '50px',
    ease: 'ease-in',
    origin: 'bottom',
});

ScrollReveal().reveal('.textbox', {
    reset: true,
    delay: 500,
    duration: 2800,
    interval: 500,
    distance: '5px',
    ease: 'ease-in',
    origin: 'bottom',
    reset: false
});

const slider = document.querySelector(".slider")
gsap.fromTo(slider, 2, { y: "0%", opacity: "100%" }, { y: "-100%", opacity: "0%", ease: Power2.easeInOut }).delay(1)