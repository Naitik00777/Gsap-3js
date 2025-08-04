// gsap.from("#page1 #box",{
//     scale: 0,
//     rotate: 360,
//     duration:2,
//     delay:1
// })

// gsap.from("#page2 #box",{
//     scale: 0,
//     rotate: 360,
//     duration:2,
//     delay:1,
//     scrollTrigger:("#page2 #box")
// })

// scrollTrigger properties
// gsap.from("#page2 #box",{
//     scale: 0,
//     rotate: 360,
//     duration:2,
//     scrollTrigger:{
//         trigger:"#page2 #box",
//         scroller:"body",
//         markers: true,
//         start: "top 60%"
//     }
// })

//  gsap.from("#page2 h1",{
//     opacity:0,
//     duration:2,
//     x:500,
//     scrollTrigger:{
//         trigger:"#page2 h1",
//         scroller:"body",
//         markers: true,
//         start: "top 50%"
//     }
// })
//  gsap.from("#page2 h2",{
//     opacity:0,
//     duration:2,
//     x:-500,
//     scrollTrigger:{
//         trigger:"#page2 h2",
//         scroller:"body",
//         markers: true,
//         start: "top 50%"
//     }
// })


// scrub is used for smoothness of animation during scrolling
//  gsap.from("#page2 #box",{
//     scale: 0,
//     opacity:0,
//     rotate: 720,
//     duration:1,
//     scrollTrigger:{
//         trigger:"#page2 #box",
//         scroller:"body",
//         markers: true,
//         start: "top 60%",
//         end:"top 30%",
//         scrub:2
//     }
// })

gsap.to("#page2 h1",{
     transform: "translateX(-150%)",
        scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        markers: true,
        start: "top 0%",
        end:"top -150%",
        scrub:2,
        pin:true
    }
})
