gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, ScrollToPlugin);

gsap.defaults({ease: "none"});

ScrollTrigger.defaults({
    markers: false
});


const l1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".leadership-container .svg-container",
    scrub: true,
    start: "center center",
    end: "+=30%"
  }
})
.from(".leadership-container .svg-container path", {drawSVG:0, duration:4});

// const f1 = gsap.timeline({
//     scrollTrigger: {
//       trigger: "footer",
//       scrub: true,
//       start: "top center",
//       end: "+=15%"
//     }
//   })
//   .from("footer .svg-container path", {drawSVG:0, duration:4});