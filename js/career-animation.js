gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, ScrollToPlugin);

gsap.defaults({ease: "none"});

ScrollTrigger.defaults({
    markers: false
});


const c1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".careers-quote-wrap",
      scrub: true,
      start: "center center",
      end: "+=75%"
    }
})
.from(".careers-quote-wrap .svg-container path", {drawSVG:0, duration:4});

const c2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".group-photo",
      scrub: true,
      start: "25% center",
      end: "+=75%"
    }
})
.to(".group-photo .overlay-img", {display:'block', duration:4});

const c3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".why-work-with-us",
      scrub: true,
      start: "top center",
      end: "+=70%"
    }
})
.from(".why-work-with-us .svg-container path", {drawSVG:0, duration:4});


const c4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".potential-candidates",
      scrub: true,
      start: "top center",
      end: "50%"
    }
})
.from(".potential-candidates .svg-container path", {drawSVG:0, duration:4});

const c5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".download-all-report",
    scrub: true,
    start: "top center",
    end: "+=40%"
  }
})
.from(".download-all-report .svg-container .path-1", {drawSVG:0, duration:4})
.from(".download-all-report .svg-container .path-2", {drawSVG:0, duration:0.2});

const c6 = gsap.timeline({
  scrollTrigger: {
    trigger: ".blogs-listing-cont",
    scrub: true,
    start: "top center",
    end: "10%"
  }
})
.from(".blogs-listing-cont .svg-container path", {drawSVG:"100% 100%", duration:4});