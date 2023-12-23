// $(".grape").on("click", function () {
//     gsap.to(".grape .gp23 .gpItself", {
//         motionPath: {
//             path: "M 0,-16 C 3,-10 25,0 25,50",
//             alignOrigin: [0.5, 0.5],
//         },
//         transformOrigin: "50% 50%",
//         duration: 1.5,
//         ease: Bounce.easeOut,
//     });
// });

$(".link").on("click", function () {
    gsap.to(".link .gp23 .gpItself", {
        motionPath: {
            path: "M 0,-16 C 3,-10 25,0 25,50",
            // align: "#testPath",
            alignOrigin: [0.5, 0.5],
            // autoRotate: true,
        },
        transformOrigin: "0% 0%",
        // repeat: 5,
        // repeatDelay: 2,
        duration: 1.5,
        ease: Bounce.easeOut,
        // ease: Power2.easeIn,
    });
});
