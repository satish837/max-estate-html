gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, ScrollToPlugin);

gsap.defaults({ease: "none"});

ScrollTrigger.defaults({
    markers: false
});

const n1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".media-gallery-container .heading",
      scrub: true,
      start: "center center",
      end:"+=30%"
    }
})
.from(".media-gallery-container .heading .svg-container path", {drawSVG:"100% 100%", duration:4});

// const n2 = gsap.timeline({
//     scrollTrigger: {
//       trigger: "footer",
//       scrub: true,
//       start: "top center",
//       end: "+=15%"
//     }
//   })
//   .from("footer .svg-container path", {drawSVG:0, duration:4});