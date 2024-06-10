gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, ScrollToPlugin);

gsap.defaults({ease: "none"});

ScrollTrigger.defaults({
    markers: false
});
let project_scroll_pos = "50%";
if(vw < 1024){
  project_scroll_pos = "60%";
}
const p1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".project-detail-spotlight",
      pin: false,
      scrub: true,
      start: project_scroll_pos+" center",
      end:"+=50%",
      // onUpdate: self => {
      //   if(self.progress.toFixed(2) > 0){
      //     gsap.to(".project-detail-spotlight .overlay-content",0.3, {yPercent:0})
      //   }
      //   if(self.progress.toFixed(2) > 0.05){
      //     gsap.to(".project-detail-spotlight .overlay-content",0.3, {yPercent:-100})
      //   }
      // }
    }
})
.to(".project-detail-spotlight .overlay-content",1, {yPercent:-100},0)
.to(".project-detail-spotlight .overlay-content", {delay:2});

const p2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".amenities-wrap",
      scrub: true,
      start: "center bottom",
      end:"+=100%"
    }
})
.from(".amenities-wrap .svg-container path", {drawSVG:0, duration:4});

const p3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".other-projects",
      scrub: true,
      start: "20% bottom",
      end:"+=100%"
    }
})
.from(".other-projects .svg-container path", {drawSVG:"100% 100%", duration:4});

// const p4 = gsap.timeline({
//   scrollTrigger: {
//     trigger: "footer",
//     scrub: true,
//     start: "top center",
//     end: "+=15%"
//   }
// })
// .from("footer .svg-container path", {drawSVG:0, duration:4});