gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, ScrollToPlugin);

gsap.defaults({ease: "none"});

ScrollTrigger.defaults({
    markers: false
});

const pl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".product-listing-detail-wrap",
        scrub: true,
        start: "top center",
        end: "+=30%"
      }
  })
  .from(".product-listing-detail-wrap .svg-wave path", {drawSVG:0, duration:4});
