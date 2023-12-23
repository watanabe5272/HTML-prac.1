function moveBOOL(x1, y1, x2, y2, thr) {
    var dis = (x1 - x2) ** 2 + (y1 - y2) ** 2
    if (dis < thr) {
        return true
    } else {
        return false
    }

}

audio = document.getElementById("audio");
audio.volume = 0.1;


WindowWidth = window.innerWidth
halfWinWid = WindowWidth * 0.5
WindowHeight = window.innerHeight
halfWinHei = WindowHeight * 0.5

windowYoyoX = gsap.utils.wrapYoyo(100, window.innerWidth - 100);
windowYoyoY = gsap.utils.wrapYoyo(100, window.innerHeight - 100);
document.addEventListener("mousemove", (e) => {

    mouseX = e.clientX
    mouseY = e.clientY

    c1 = document.getElementById("circle1")
    c1rect = c1.getBoundingClientRect()
    c1x = (c1rect.left + c1rect.right) / 2
    c1y = (c1rect.top + c1rect.bottom) / 2

    gsap.set(".cursor", {
        x: mouseX,
        y: mouseY,
    })

    gsap.to(".sub-cursor", {
        x: mouseX,
        y: mouseY,
    })

    for (let i = 1; i <= 10; i++) {
        circle_NAME = "circle" + i
        circle_NAME2 = "#circle" + i

        // console.log(circle_NAME, circle_NAME2)
        c = document.getElementById(circle_NAME)
        crect = c.getBoundingClientRect()
        radius = (crect.right - crect.left) / 2
        // console.log(i, radius)
        cx = (crect.left + crect.right) / 2
        cy = (crect.top + crect.bottom) / 2
        if (moveBOOL(cx, cy, mouseX, mouseY, radius ** 2)) {
            gsap.to(circle_NAME2, {
                // x: -100,
                // y: -100,
                x: cx + (cx - mouseX) * 5,
                y: cy + (cy - mouseY) * 5,
                duration: 2.5,
                modifiers: {
                    x: x => windowYoyoX(parseFloat(x)) + "px",
                    y: y => windowYoyoY(parseFloat(y)) + "px"
                },
                ease: Power2.easeOut
            })
        }
    }


})

const slider = document.querySelector(".slider")
const message = document.querySelector(".messagefront")
const circle1 = document.querySelector("#circle1")
// const tl = gsap.timeline()
gsap.fromTo(slider, 2, { y: "0%", opacity: "100%" }, { y: "-100%", opacity: "0%", ease: Power2.easeInOut }).delay(4)

gsap.fromTo(message, 1, { y: "-50%", opacity: "0%" }, { y: "0%", opacity: "100%", ease: Bounce.easeOut }).delay(13)

// console.log(WindowWidth * 0.5, WindowHeight * 0.5)

gsap.fromTo(circle1, 2, { x: halfWinWid, y: halfWinHei, opacity: "100%", scale: 0 }, { x: halfWinWid + gsap.utils.random(-halfWinWid + 150, halfWinWid - 150), y: halfWinHei + gsap.utils.random(-halfWinHei + 150, halfWinHei - 150), opacity: "100%", scale: 1, ease: Elastic.easeOut }).delay(12.1)

gsap.fromTo(circle2, 2, { x: halfWinWid, y: halfWinHei, opacity: "100%", scale: 0 }, { x: halfWinWid + gsap.utils.random(-halfWinWid + 150, halfWinWid - 150), y: halfWinHei + gsap.utils.random(-halfWinHei + 150, halfWinHei - 150), opacity: "100%", scale: 1, ease: Elastic.easeOut }).delay(12.2)

gsap.fromTo(circle3, 2, { x: halfWinWid, y: halfWinHei, opacity: "100%", scale: 0 }, { x: halfWinWid + gsap.utils.random(-halfWinWid + 150, halfWinWid - 150), y: halfWinHei + gsap.utils.random(-halfWinHei + 150, halfWinHei - 150), opacity: "100%", scale: 1, ease: Elastic.easeOut }).delay(12.3)

gsap.fromTo(circle4, 2, { x: halfWinWid, y: halfWinHei, opacity: "100%", scale: 0 }, { x: halfWinWid + gsap.utils.random(-halfWinWid + 150, halfWinWid - 150), y: halfWinHei + gsap.utils.random(-halfWinHei + 150, halfWinHei - 150), opacity: "100%", scale: 1, ease: Elastic.easeOut }).delay(12.4)

gsap.fromTo(circle5, 2, { x: halfWinWid, y: halfWinHei, opacity: "100%", scale: 0 }, { x: halfWinWid + gsap.utils.random(-halfWinWid + 150, halfWinWid - 150), y: halfWinHei + gsap.utils.random(-halfWinHei + 150, halfWinHei - 150), opacity: "100%", scale: 1, ease: Elastic.easeOut }).delay(12.5)

gsap.fromTo(circle6, 2, { x: halfWinWid, y: halfWinHei, opacity: "100%", scale: 0 }, { x: halfWinWid + gsap.utils.random(-halfWinWid + 150, halfWinWid - 150), y: halfWinHei + gsap.utils.random(-halfWinHei + 150, halfWinHei - 150), opacity: "100%", scale: 1, ease: Elastic.easeOut }).delay(12.6)

gsap.fromTo(circle7, 2, { x: halfWinWid, y: halfWinHei, opacity: "100%", scale: 0 }, { x: halfWinWid + gsap.utils.random(-halfWinWid + 150, halfWinWid - 150), y: halfWinHei + gsap.utils.random(-halfWinHei + 150, halfWinHei - 150), opacity: "100%", scale: 1, ease: Elastic.easeOut }).delay(12.7)

gsap.fromTo(circle8, 2, { x: halfWinWid, y: halfWinHei, opacity: "100%", scale: 0 }, { x: halfWinWid + gsap.utils.random(-halfWinWid + 150, halfWinWid - 150), y: halfWinHei + gsap.utils.random(-halfWinHei + 150, halfWinHei - 150), opacity: "100%", scale: 1, ease: Elastic.easeOut }).delay(12.8)

gsap.fromTo(circle9, 2, { x: halfWinWid, y: halfWinHei, opacity: "100%", scale: 0 }, { x: halfWinWid + gsap.utils.random(-halfWinWid + 150, halfWinWid - 150), y: halfWinHei + gsap.utils.random(-halfWinHei + 150, halfWinHei - 150), opacity: "100%", scale: 1, ease: Elastic.easeOut }).delay(12.9)

gsap.fromTo(circle10, 2, { x: halfWinWid, y: halfWinHei, opacity: "100%", scale: 0 }, { x: halfWinWid + gsap.utils.random(-halfWinWid + 150, halfWinWid - 150), y: halfWinHei + gsap.utils.random(-halfWinHei + 150, halfWinHei - 150), opacity: "100%", scale: 1, ease: Elastic.easeOut }).delay(12)

const audio_button = document.querySelector(".audio_button")
gsap.fromTo(audio_button, 2, { y: "-100%", opacity: "0%" }, { y: "0%", opacity: "100%", ease: Elastic.easeOut }).delay(15)

setTimeout(() => { audio.play(); }, 16000);

document.querySelector(".link").onclick = function () {
    gsap.fromTo(slider, 2, { y: "-100%", opacity: "0%" }, { y: "0%", opacity: "100%", ease: Power2.easeInOut }).delay(1.5);
    setTimeout(() => { window.location.href = './files/test_letter/backgroud.html'; }, 3550)
}