gsap.registerPlugin(ScrollTrigger, GSDevTools);

ScrollTrigger.defaults({
  markers: false
});


const a1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".we-are-max-estate",
    scrub: true,
    start: "45% center",
    end: "+=60%"
  }
})
.from(".we-are-max-estate .svg-container path", {drawSVG:0, duration:4});



const a2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".our-purpose",
    scrub: true,
    start: "top center"
  }
})
.from(".our-purpose .svg-container path", {drawSVG:0, duration:4});

if(vw > 980){
  const a2_1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".our-purpose",
      pin: true,
      scrub: 1,
      start: "top top",
      end:"+=100%"
    }
  })
  .to(".our-purpose .image-wrap-desktop .bind", {width:"100%", borderRadius:0, duration:4})
  .to(".our-purpose .image-wrap-desktop .bind", {delay:5, duration:4});
}

const a3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".our-mission",
    scrub: true,
    start: "top center",
    end: "+=90%"
  }
})
.from(".our-mission .svg-container path", {drawSVG:0, duration:4});


if(vw > 980){
  let a4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".our-values-wrap",
      pin: true,
      scrub: true,
      start: "center center",
      end:"+=800%"
    }
  })
  .addLabel("pp-s-1")
  .from(".our-values-wrap .svg-container svg .path-1", {drawSVG: "100% 100%", duration:2 },"pp-s-1")
  .to(".our-values-wrap .svg-container svg", {xPercent:0, yPercent:-7, duration:2 }, "pp-s-1")
  .addLabel("pp-s-2")
  .from(".our-values-wrap .svg-container svg .path-2", {drawSVG: "100% 100%", duration:6 },"pp-s-2")
  .to(".our-values-wrap .svg-container svg", {xPercent:-19, yPercent:-10, duration:2 },"pp-s-2-=0.2")
  .addLabel("pp-s-3")
  .from(".our-values-wrap .svg-container svg .path-3", {drawSVG: "100% 100%", duration:6 },"pp-s-3")
  .to(".our-values-wrap .svg-container svg", {xPercent:-40, yPercent:-10, duration:1 },"pp-s-3")
  .addLabel("pp-s-4")
  .from(".our-values-wrap .svg-container svg .path-4", {drawSVG: "100% 100%", duration:6 },"pp-s-4")
  .to(".our-values-wrap .svg-container svg", {xPercent:-62, yPercent:-12, duration:2 },"pp-s-4-=1")
  .addLabel("pp-s-5")
  .from(".our-values-wrap .svg-container svg .path-5", {drawSVG: "100% 100%", duration:6 },"pp-s-5")
  .to(".our-values-wrap .svg-container svg", {xPercent:-82, yPercent:-8, duration:1 },"pp-s-5-=0.2")
  .addLabel("pp-s-6")
  .from(".our-values-wrap .svg-container svg .path-6", {drawSVG: "100% 100%", duration:6 },"pp-s-6")
  .to(".our-values-wrap .svg-container svg", {xPercent:-85, yPercent:-35, duration:2 },"pp-s-6-=1.2")
  .addLabel("pp-s-7")
  .from(".our-values-wrap .svg-container svg .path-7", {drawSVG: "100% 100%", duration:6 },"pp-s-7")
  .to(".our-values-wrap .svg-container svg", {xPercent:-82, yPercent:-65, duration:2 },"pp-s-7-=1.2")
  .addLabel("pp-s-8")
  .from(".our-values-wrap .svg-container svg .path-8", {drawSVG: "100% 100%", duration:6 },"pp-s-8")
  .to(".our-values-wrap .svg-container svg", {xPercent:-82, yPercent:-90, duration:2 },"pp-s-8-=1.2")
}


const awards = gsap.utils.toArray('.awards-row-wrap');

awards.forEach((award, i) => {
  const anim = gsap.fromTo(award, {autoAlpha: 0, y: 100}, {duration: 1, autoAlpha: 1, y: 0});
  ScrollTrigger.create({
    trigger: award,
    animation: anim,
    toggleActions: 'play none none none',
    once: true,
  });
});