gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, ScrollToPlugin);

gsap.defaults({ease: "none"});

ScrollTrigger.defaults({
    markers: false
});

const b1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".blogs-listing-cont .head",
      scrub: true,
      start: "200% center",
      end:"+=50%"
    }
})
.from(".blogs-listing-cont .head .svg-container path", {drawSVG:"100% 100%", duration:4});

const b2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".blog-post-wrapper .banner",
    scrub: true,
    start: "70% center",
    end:"+=30%"
  }
})
.from(".blog-post-wrapper .banner .svg-container path", {drawSVG:0, duration:4});

// const b3 = gsap.timeline({
//   scrollTrigger: {
//     trigger: "footer",
//     scrub: true,
//     start: "top center",
//     end: "+=15%"
//   }
// })
// .from("footer .svg-container path", {drawSVG:0, duration:4});