function loadingAnimation() {
    var tl = gsap.timeline();
tl.from(".line h1",{
    y:150,
    stagger:0.2,
    duration:0.6,
    delay:0.5,
    opacity:0
})
tl.from("#line1-part1 ",{
    opacity :0,
    onStart : function(){
        var h5 = document.querySelector("#line1-part1 h5");
        var count =0;
        
        var timer = setInterval(function(){
            count++;
           document.querySelector("#line1-part1 h5").textContent = count;
            if (count == 100){
                clearInterval(timer);
            }
        },33)


    }
})
tl.to(".line h2",{
animationName : "anime",
opacity:1
})
tl.to(".line",{
    opacity:0,
    delay:4
})
tl.to("#loader",{
    opacity:0,
    duration:0.6,
    delay:0
})

tl.from("page1",{
    delay :0.2,
    y:1600,
    opacity:0,
    duration:0.6,
    ease: Power4
})

tl.to("#loader",{
    display : "none",
   
})
tl.from("#nav",{
   opacity:0
})
tl.from(".hero1 h1,.hero2 h1,.hero3 h2,.hero3 h3,.hero4 h1",{
    y:120,
    stagger:0.2
})

}



function cursorAnimation(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#crsr",{
            left:dets.x,
            top:dets.y
        })
    })
    
    Shery.makeMagnet("#nav-part2 h4" /* Element to target.*/, {
        //Parameters are optional.
        
      });
}
cursorAnimation();
loadingAnimation();