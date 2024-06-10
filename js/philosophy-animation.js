gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, ScrollToPlugin);

gsap.defaults({ease: "none"});

ScrollTrigger.defaults({
    markers: false
});

let p1;
let is_timeline_enable = true;
if(vw > 980){
  p1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".philosophy-spotlight",
        pin: true,
        scrub: true,
        start: "60% center",
        end: "1000%",
        anticipatePin: 1,
        refreshPriority: 1
      }
  })
  .from(".philosphy-icon-block .svg-overlay .pp-1", {drawSVG:"100% 100%", duration:1, onStart:function(){ jQuery('.events-wrap.event-1').addClass('active'); philosophySpotlightContent(0); }, onReverseComplete:function(){ jQuery('.events-wrap.event-1').removeClass('active'), philosophySpotlightContent(0); }})
    .addLabel("pp-1")
    .from(".philosphy-icon-block .svg-overlay .pp-2", {drawSVG:0, duration:1, onStart:function(){ jQuery('.events-wrap.event-2').addClass('active'), philosophySpotlightContent(1); }, onReverseComplete:function(){ jQuery('.events-wrap.event-2').removeClass('active'), philosophySpotlightContent(0); }})
    .addLabel("pp-2")
    .from(".philosphy-icon-block .svg-overlay .pp-3", {drawSVG:0, duration:1, onStart:function(){ jQuery('.events-wrap.event-3').addClass('active'), philosophySpotlightContent(2); }, onReverseComplete:function(){ jQuery('.events-wrap.event-3').removeClass('active'), philosophySpotlightContent(1); }})
    .addLabel("pp-3")
    .from(".philosphy-icon-block .svg-overlay .pp-4", {drawSVG:0, duration:1, onStart:function(){ jQuery('.events-wrap.event-4').addClass('active'), philosophySpotlightContent(3); }, onReverseComplete:function(){ jQuery('.events-wrap.event-4').removeClass('active'), philosophySpotlightContent(2); }})
    .addLabel("pp-4")
    .from(".philosphy-icon-block .svg-overlay .pp-5", {drawSVG:0, duration:1, onStart:function(){ jQuery('.events-wrap.event-5').addClass('active'), philosophySpotlightContent(4); }, onReverseComplete:function(){ jQuery('.events-wrap.event-5').removeClass('active'), philosophySpotlightContent(3); }})
    .addLabel("pp-5")
    .from(".philosphy-icon-block .svg-overlay .pp-6", {drawSVG:"100% 100%", duration:1, onStart:function(){ jQuery('.events-wrap.event-6').addClass('active'), philosophySpotlightContent(5); }, onReverseComplete:function(){ jQuery('.events-wrap.event-6').removeClass('active'), philosophySpotlightContent(4); }})
    .from(".philosphy-icon-block .svg-overlay .pp-6-1", {drawSVG:0, duration:1, onStart:function(){ jQuery('.events-wrap.event-6').addClass('active'), philosophySpotlightContent(5); }, onReverseComplete:function(){ jQuery('.events-wrap.event-6').removeClass('active'), philosophySpotlightContent(4); }}, 5)
    .addLabel("pp-6")
    .from(".philosphy-icon-block .svg-overlay .pp-7", {drawSVG:"100% 100%", duration:1, onStart:function(){ jQuery('.events-wrap.event-7').addClass('active'), philosophySpotlightContent(6); }, onReverseComplete:function(){ jQuery('.events-wrap.event-7').removeClass('active'), philosophySpotlightContent(5); }})
    .from(".philosphy-icon-block .svg-overlay .pp-7-1", {drawSVG:"100% 100%", duration:1, onStart:function(){ jQuery('.events-wrap.event-7').addClass('active'), philosophySpotlightContent(6); }, onReverseComplete:function(){ jQuery('.events-wrap.event-7').removeClass('active'), philosophySpotlightContent(5); }}, 6)
    .addLabel("pp-7")
    .from(".philosphy-icon-block .svg-overlay .pp-8", {drawSVG:"100% 100%", duration:1, onStart:function(){ jQuery('.events-wrap.event-8').addClass('active'), philosophySpotlightContent(7); }, onReverseComplete:function(){ jQuery('.events-wrap.event-8').removeClass('active'), philosophySpotlightContent(6); }})
    .addLabel("pp-8")
    .from(".philosphy-icon-block .svg-overlay .pp-9", {drawSVG:"100% 100%", duration:1, onStart:function(){ jQuery('.events-wrap.event-9').addClass('active'), philosophySpotlightContent(8); }, onReverseComplete:function(){ jQuery('.events-wrap.event-9').removeClass('active'), philosophySpotlightContent(7); }})
    .addLabel("pp-9")
    .from(".philosphy-icon-block .svg-overlay .pp-10", {drawSVG:"100% 100%", duration:1, onStart:function(){ jQuery('.events-wrap.event-10').addClass('active'), philosophySpotlightContent(9); }, onReverseComplete:function(){ jQuery('.events-wrap.event-10').removeClass('active'), philosophySpotlightContent(8); }})
    .from(".philosphy-icon-block .svg-overlay .pp-10-1", {drawSVG:"100% 100%", duration:1, onStart:function(){ jQuery('.events-wrap.event-10').addClass('active'), philosophySpotlightContent(9); }, onReverseComplete:function(){ jQuery('.events-wrap.event-10').removeClass('active'),philosophySpotlightContent(9); }}, 9)
    .addLabel("pp-10");

    
    refreshSTAnim = function(){
      p2.scrollTrigger.refresh();
      p3.scrollTrigger.refresh();
      p4.scrollTrigger.refresh();
      // p5.scrollTrigger.refresh();
    }

    jQuery('.skip-button').on('click', function(){
      jQuery('.screen-blocker').fadeIn(
        function(){
          if(is_timeline_enable){
            p1.scrollTrigger.disable();
            is_timeline_enable = false;
            jQuery('.skip-button .label').html() == 'Skip Ahead' ? jQuery('.skip-button .label').html('Enable') : jQuery('.skip-button .label').html('Skip Ahead'); 
            jQuery('.events-wrap').removeClass('active');
            jQuery("html, body").animate({ scrollTop: 70 }, 0);
            refreshSTAnim();
            setTimeout(() => {
              jQuery('.screen-blocker').fadeOut();
            }, 1000);
          }
          else{
            jQuery("html, body").animate({ scrollTop: 70 }, 0);
            p1.scrollTrigger.enable();
            p1.scrollTrigger.refresh();
            refreshSTAnim();
            is_timeline_enable = true;
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
      on: {
        ready: function() {
          p_m_1.set(".philosphy-icon-block-mobile .svg-overlay .pp-2, .philosphy-icon-block-mobile .svg-overlay .pp-3, .philosphy-icon-block-mobile .svg-overlay .pp-4, .philosphy-icon-block-mobile .svg-overlay .pp-5", {drawSVG: 0});
          p_m_1.set(".philosphy-icon-block-mobile .svg-overlay .pp-6, .philosphy-icon-block-mobile .svg-overlay .pp-6-1, .philosphy-icon-block-mobile .svg-overlay .pp-7, .philosphy-icon-block-mobile .svg-overlay .pp-7-1, .philosphy-icon-block-mobile .svg-overlay .pp-8, .philosphy-icon-block-mobile .svg-overlay .pp-9, .philosphy-icon-block-mobile .svg-overlay .pp-10, .philosphy-icon-block-mobile .svg-overlay .pp-10-1", {drawSVG: "100% 100%"});
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
            p_m_1.to(".philosphy-icon-block-mobile .svg-overlay .pp-"+_curr_index, {drawSVG:"100%", duration:1});
          }
          if(_curr_index === 6 || _curr_index === 7 || _curr_index === 10){
            p_m_1.to(".philosphy-icon-block-mobile .svg-overlay .pp-"+_curr_index, {drawSVG:"0% 100%", duration:1});
            p_m_1.to(".philosphy-icon-block-mobile .svg-overlay .pp-"+_curr_index+"-1", {drawSVG:"0% 100%", duration:0.5});
          }
          if(_curr_index === 8 || _curr_index === 9){
            p_m_1.to(".philosphy-icon-block-mobile .svg-overlay .pp-"+_curr_index, {drawSVG:"0% 100%", duration:1});
          }
      }
      else{
        let _curr_index = previousIndex + 1;
        if(_curr_index === 1 || _curr_index === 2 || _curr_index === 3 || _curr_index === 4 || _curr_index === 5){
          p_m_1.to(".philosphy-icon-block-mobile .svg-overlay .pp-"+_curr_index, {drawSVG:0, duration:1});
        }
        if(_curr_index === 6 || _curr_index === 7 || _curr_index === 10){
          p_m_1.to(".philosphy-icon-block-mobile .svg-overlay .pp-"+_curr_index, {drawSVG:"100% 100%", duration:1});
          p_m_1.to(".philosphy-icon-block-mobile .svg-overlay .pp-"+_curr_index+"-1", {drawSVG:"100% 100%", duration:0.5});
        }
        if(_curr_index === 8 || _curr_index === 9){
          p_m_1.to(".philosphy-icon-block-mobile .svg-overlay .pp-"+_curr_index, {drawSVG:"100% 100%", duration:1});
        }
      }
      
      previousIndex = index;
    }); 
  }


const p2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".art-at-max-estate",
      scrub: true,
      start: "center center",
      end: "+=30%"
    }
})
.from(".art-at-max-estate .svg-wrap .svg-container path", {drawSVG:0, duration:4});

const p3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".community .svg-container",
      scrub: true,
      start: "top center",
      end: "+=50%"
    }
})
.from(".community .svg-container path", {drawSVG:0, duration:4});

const p4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".gallery .svg-container",
      scrub: true,
      start: "top center",
      end: "+=50%"
    }
})
.from(".gallery .svg-container path", {drawSVG:0, duration:4});

// const p5 = gsap.timeline({
//     scrollTrigger: {
//       trigger: "footer",
//       scrub: true,
//       start: "top center",
//       end: "+=15%"
//     }
// })
// .from("footer .svg-container path", {drawSVG:0, duration:4});


philosophySpotlightContent = function(obj){
    jQuery('.philosophy-content').hide();
    jQuery('.philosophy-content:eq('+obj+')').show();
}
philosophySpotlightContentScroll = function(obj, offset){
    if(is_timeline_enable){
      gsap.to(window, {scrollTo: p1.scrollTrigger.labelToScroll(obj)-parseInt(offset)});
    }
}