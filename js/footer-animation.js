gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, ScrollToPlugin);

gsap.defaults({ease: "none"});

ScrollTrigger.defaults({
    markers: false
});
let endPos = "+=50%";
if(vw > 1950){
  endPos = "+=12%"
}

const f1 = gsap.timeline({
      scrollTrigger: {
        trigger: "footer",
        scrub: true,
        start: "top 70%",
        end: endPos,
        refreshPriority: 1
      }
  })
  .from("footer .svg-container path", {drawSVG:0, duration:4});

  jQuery(window).on('load', function(){
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1000);
  });