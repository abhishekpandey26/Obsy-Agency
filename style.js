function locomativeanimation(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
function loadingANimation(){
    var tl = gsap.timeline();

tl.from(".line h1",{
    y:150,
    stagger:0.2,
    delay:0.3,
    duration:0.6
})
tl.from(".line h2",{
    opacity:0,
    fontFamily: "helvetica",
    onStart:function(){
        var h5timer=document.querySelector(".line-part1 h5");
var grow=0;
setInterval(function(){
    if(grow<100){
        // h5timer.innerHTML=grow++;
        // console.log(grow);
        grow++;
        h5timer.innerHTML=grow++;
    }
    else{
        h5timer.innerHTML=grow;

    }
},30)
    }
})
tl.to("#loader",{
    opacity:0,
    // delay:4,
    duration:0.3,
    delay:3.5
})
tl.to("#loader",{
    display:"none",
})
tl.from("#page1",{
    delay:0.2,
    y:1200,
    opacity:0,
    ease:Power4
})
tl.from("#nav1",{
    opacity:0
})
tl.from("#center1 h1 , #center2 h1 ,#centerid h2,h3 ,#center3 h1",{
    y:150,
    stagger:0.2
})

}


function cursorAnimation(){
    document.addEventListener("mousemove", function(dets) {
        console.log(dets.x);
        gsap.to("#crsr",{
         left:dets.x,
         top:dets.y,
     
        })
     });
     Shery.makeMagnet("#nav1-part1 h4" /* Element to target.*/, {
        //Parameters are optional.
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
      });
      var videoContainer =document.querySelector("#video_container");
      var video=document.querySelector("#video_container");
      videoContainer.addEventListener("mouseenter",function(){
        videoContainer.addEventListener("mousemove",function(dets){
            gsap.to("#video_cursur",{
                left:dets.x - 390,
                y:dets.y - 200
            })
        })
      })
     
      videoContainer.addEventListener("click",function(){
        video.play();
        video.style.opacity=1;
      })
}
function sheryAnimation() {
    Shery.imageEffect("#image-div", {
      style: 5,
      gooey: true,
    //   debug:true,
      config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7241195453907675},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.23,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.5,"range":[0,10]},"metaball":{"value":0.33,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.01,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
    });
  }
loadingANimation();
cursorAnimation();
locomativeanimation();
sheryAnimation();

