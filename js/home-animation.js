gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, ScrollToPlugin);

gsap.defaults({ease: "none"});

ScrollTrigger.defaults({
    markers: false
});

const t1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".home-about .svg-container",
      scrub: true,
      start: "top center",
      end: "bottom center"
    }
})
.from(".home-about .svg-container path", {drawSVG:"100% 100%", duration:4});

const t2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".home-philosophy .svg-container",
      scrub: true,
      start: "top center",
      end: "+=150"
    }
})
.from(".home-philosophy .svg-container path", {drawSVG:"100% 100%", duration:4});

//Philosophy section scrolling script
let p1;
if(vw > 980){
  p1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".home-philosophy",
        pin: true,
        scrub: true,
        start: "top -15%",
        end: "1000%",
        anticipatePin: 1,
        refreshPriority: 1
      }
  })
  .from(".home-philosophy .svg-container-2 .svg-overlay .pp-1", {drawSVG:"100% 100%", duration:1, onStart:function(){ jQuery('.events-wrap.event-1').addClass('active'); homePhilosophyContent(0); }, onReverseComplete:function(){ jQuery('.events-wrap.event-1').removeClass('active'), homePhilosophyContent(0); }})
  .addLabel("pp-1")
  .from(".home-philosophy .svg-container-2 .svg-overlay .pp-2", {drawSVG:0, duration:1, onStart:function(){ jQuery('.events-wrap.event-2').addClass('active'), homePhilosophyContent(1); }, onReverseComplete:function(){ jQuery('.events-wrap.event-2').removeClass('active'), homePhilosophyContent(0); }})
  .addLabel("pp-2")
  .from(".home-philosophy .svg-container-2 .svg-overlay .pp-3", {drawSVG:0, duration:1, onStart:function(){ jQuery('.events-wrap.event-3').addClass('active'), homePhilosophyContent(2); }, onReverseComplete:function(){ jQuery('.events-wrap.event-3').removeClass('active'), homePhilosophyContent(1); }})
  .addLabel("pp-3")
  .from(".home-philosophy .svg-container-2 .svg-overlay .pp-4", {drawSVG:0, duration:1, onStart:function(){ jQuery('.events-wrap.event-4').addClass('active'), homePhilosophyContent(3); }, onReverseComplete:function(){ jQuery('.events-wrap.event-4').removeClass('active'), homePhilosophyContent(2); }})
  .addLabel("pp-4")
  .from(".home-philosophy .svg-container-2 .svg-overlay .pp-5", {drawSVG:0, duration:1, onStart:function(){ jQuery('.events-wrap.event-5').addClass('active'), homePhilosophyContent(4); }, onReverseComplete:function(){ jQuery('.events-wrap.event-5').removeClass('active'), homePhilosophyContent(3); }})
  .addLabel("pp-5")
  .from(".home-philosophy .svg-container-2 .svg-overlay .pp-6", {drawSVG:"100% 100%", duration:1, onStart:function(){ jQuery('.events-wrap.event-6').addClass('active'), homePhilosophyContent(5); }, onReverseComplete:function(){ jQuery('.events-wrap.event-6').removeClass('active'), homePhilosophyContent(4); }})
  .from(".home-philosophy .svg-container-2 .svg-overlay .pp-6-1", {drawSVG:0, duration:1, onStart:function(){ jQuery('.events-wrap.event-6').addClass('active'), homePhilosophyContent(5); }, onReverseComplete:function(){ jQuery('.events-wrap.event-6').removeClass('active'), homePhilosophyContent(4); }}, 5)
  .addLabel("pp-6")
  .from(".home-philosophy .svg-container-2 .svg-overlay .pp-7", {drawSVG:"100% 100%", duration:1, onStart:function(){ jQuery('.events-wrap.event-7').addClass('active'), homePhilosophyContent(6); }, onReverseComplete:function(){ jQuery('.events-wrap.event-7').removeClass('active'), homePhilosophyContent(5); }})
  .from(".home-philosophy .svg-container-2 .svg-overlay .pp-7-1", {drawSVG:"100% 100%", duration:1, onStart:function(){ jQuery('.events-wrap.event-7').addClass('active'), homePhilosophyContent(6); }, onReverseComplete:function(){ jQuery('.events-wrap.event-7').removeClass('active'), homePhilosophyContent(5); }}, 6)
  .addLabel("pp-7")
  .from(".home-philosophy .svg-container-2 .svg-overlay .pp-8", {drawSVG:"100% 100%", duration:1, onStart:function(){ jQuery('.events-wrap.event-8').addClass('active'), homePhilosophyContent(7); }, onReverseComplete:function(){ jQuery('.events-wrap.event-8').removeClass('active'), homePhilosophyContent(6); }})
  .addLabel("pp-8")
  .from(".home-philosophy .svg-container-2 .svg-overlay .pp-9", {drawSVG:"100% 100%", duration:1, onStart:function(){ jQuery('.events-wrap.event-9').addClass('active'), homePhilosophyContent(8); }, onReverseComplete:function(){ jQuery('.events-wrap.event-9').removeClass('active'), homePhilosophyContent(7); }})
  .addLabel("pp-9")
  .from(".home-philosophy .svg-container-2 .svg-overlay .pp-10", {drawSVG:"100% 100%", duration:1, onStart:function(){ jQuery('.events-wrap.event-10').addClass('active'), homePhilosophyContent(9); }, onReverseComplete:function(){ jQuery('.events-wrap.event-10').removeClass('active'), homePhilosophyContent(8); }})
  .from(".home-philosophy .svg-container-2 .svg-overlay .pp-10-1", {drawSVG:"100% 100%", duration:1, onStart:function(){ jQuery('.events-wrap.event-10').addClass('active'), homePhilosophyContent(9); }, onReverseComplete:function(){ jQuery('.events-wrap.event-10').removeClass('active'),homePhilosophyContent(9); }}, 9)
  .addLabel("pp-10")


  let is_timeline_enable = true;
  refreshSTAnim = function(){
    t3.scrollTrigger.refresh();
    t4.scrollTrigger.refresh();
    t5.scrollTrigger.refresh();
    // t6.scrollTrigger.refresh();
  }
  jQuery('.skip-button').on('click', function(){
    jQuery('.screen-blocker').fadeIn(
      function(){
        if(is_timeline_enable){
          p1.scrollTrigger.disable();
          refreshSTAnim();
          is_timeline_enable = false;
          jQuery("html, body").animate({ scrollTop: jQuery('.home-philosophy-video').offset().top+jQuery('.home-philosophy-video').innerHeight() + 120 }, 0);
          jQuery('.skip-button .label').html() == 'Skip Ahead' ? jQuery('.skip-button .label').html('Enable') : jQuery('.skip-button .label').html('Skip Ahead'); 
          jQuery('.events-wrap').removeClass('active');
          setTimeout(() => {
            jQuery('.screen-blocker').fadeOut();
          }, 1000);
        }
        else{
          jQuery("html, body").animate({ scrollTop: jQuery('.home-philosophy-video').offset().top+jQuery('.home-philosophy-video').innerHeight() + 120 }, {
            duration: 0,
            complete: function(){
              p1.scrollTrigger.enable();
              p1.scrollTrigger.refresh();
              refreshSTAnim();
              is_timeline_enable = true;
            }
          });
          jQuery('.skip-button .label').html() == 'Skip Ahead' ? jQuery('.skip-button .label').html('Enable') : jQuery('.skip-button .label').html('Skip Ahead'); 
          jQuery('.events-wrap').removeClass('active');
          setTimeout(() => {
            jQuery('.screen-blocker').fadeOut();
          }, 1000);
        }
      }
    );
  });
}
else{
  //Philosophy section in mobile
  const p_m_1 = gsap.timeline();
  var $philosophy_carousel = jQuery('.philosophy-mobile-slider').flickity({
    cellAlign: "left", 
    contain: true, 
    watchCSS: true, 
    prevNextButtons: false,
    imagesLoaded: true,
    adaptiveHeight: true,
    on: {
      ready: function() {
        p_m_1.set(".home-philosophy .svg-container-2 .svg-overlay .pp-2, .home-philosophy .svg-container-2 .svg-overlay .pp-3, .home-philosophy .svg-container-2 .svg-overlay .pp-4, .home-philosophy .svg-container-2 .svg-overlay .pp-5", {drawSVG: 0});
        p_m_1.set(".home-philosophy .svg-container-2 .svg-overlay .pp-6, .home-philosophy .svg-container-2 .svg-overlay .pp-6-1, .home-philosophy .svg-container-2 .svg-overlay .pp-7, .home-philosophy .svg-container-2 .svg-overlay .pp-7-1, .home-philosophy .svg-container-2 .svg-overlay .pp-8, .home-philosophy .svg-container-2 .svg-overlay .pp-9, .home-philosophy .svg-container-2 .svg-overlay .pp-10, .home-philosophy .svg-container-2 .svg-overlay .pp-10-1", {drawSVG: "100% 100%"});
      }
    }
  });


  var flkty = $philosophy_carousel.data('flickity');
  var previousIndex = flkty.selectedIndex;

  $philosophy_carousel.on( 'change.flickity', function( event, index ) {
    // get changed index
    var delta = index - previousIndex;
    if ( delta > 0 ) {
      let _curr_index = index + 1;
        if(_curr_index === 1 || _curr_index === 2 || _curr_index === 3 || _curr_index === 4 || _curr_index === 5){
          p_m_1.to(".home-philosophy .svg-container-2 .svg-overlay .pp-"+_curr_index, {drawSVG:"100%", duration:1});
        }
        if(_curr_index === 6 || _curr_index === 7 || _curr_index === 10){
          p_m_1.to(".home-philosophy .svg-container-2 .svg-overlay .pp-"+_curr_index, {drawSVG:"0% 100%", duration:1});
          p_m_1.to(".home-philosophy .svg-container-2 .svg-overlay .pp-"+_curr_index+"-1", {drawSVG:"0% 100%", duration:0.5});
        }
        if(_curr_index === 8 || _curr_index === 9){
          p_m_1.to(".home-philosophy .svg-container-2 .svg-overlay .pp-"+_curr_index, {drawSVG:"0% 100%", duration:1});
        }
    }
    else{
      let _curr_index = previousIndex + 1;
      if(_curr_index === 1 || _curr_index === 2 || _curr_index === 3 || _curr_index === 4 || _curr_index === 5){
        p_m_1.to(".home-philosophy .svg-container-2 .svg-overlay .pp-"+_curr_index, {drawSVG:0, duration:1});
      }
      if(_curr_index === 6 || _curr_index === 7 || _curr_index === 10){
        p_m_1.to(".home-philosophy .svg-container-2 .svg-overlay .pp-"+_curr_index, {drawSVG:"100% 100%", duration:1});
        p_m_1.to(".home-philosophy .svg-container-2 .svg-overlay .pp-"+_curr_index+"-1", {drawSVG:"100% 100%", duration:0.5});
      }
      if(_curr_index === 8 || _curr_index === 9){
        p_m_1.to(".home-philosophy .svg-container-2 .svg-overlay .pp-"+_curr_index, {drawSVG:"100% 100%", duration:1});
      }
    }
    
    previousIndex = index;
  }); 
}

const t3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".home-project-slider .svg-container",
      scrub: true,
      start: "top center",
      end: "+=40%"
    }
})
.from(".home-project-slider .svg-container path", {drawSVG:"100% 100%", duration:4}).addLabel("t3-1");


const t4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".home-project-slider .svg-container-2",
      scrub: true,
      start: "top center",
      end: "+=35%"
    }
})
.from(".home-project-slider .svg-container-2 path", {drawSVG:"100% 100%", duration:4});

const t5 = gsap.timeline({
    scrollTrigger: {
      trigger: ".home-news-and-media .svg-container",
      scrub: true,
      start: "top center",
      end: "bottom 60%"
    }
})
.from(".home-news-and-media .svg-container path", {drawSVG:"100% 100%", duration:4});

// const t6 = gsap.timeline({
//     scrollTrigger: {
//       trigger: "footer",
//       scrub: true,
//       start: "top center",
//       end: "+=20%",
//       refreshPriority: 1
//     }
// })
// .from("footer .svg-container path", {drawSVG:0, duration:4});

homePhilosophyContent = function(obj){
    jQuery('.philosophy-content').hide();
    jQuery('.philosophy-content:eq('+obj+')').show();
}
homePhilosophyContentScroll = function(obj, offset){
    gsap.to(window, {scrollTo: p1.scrollTrigger.labelToScroll(obj)-parseInt(offset)});
}

jQuery(window).on('load', function(){
  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 1000);

  let _listing_update_popup = localStorage.getItem('listing_update_popup');

  jQuery('#listing-update-popup .close').on('click', function(){
    localStorage.setItem('listing_update_popup', true);
  });

  if(!_listing_update_popup){
    jQuery('#listing-update-popup').modal('show');
  }
});
