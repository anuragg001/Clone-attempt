const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnim(){
    var tl =gsap.timeline();

    tl.from("#nav",{
        y: '-10',
        opacity: 0,
        duration:1.5,
        ease: Expo.easeInOut
    })
     .to(".boundingelem",{
        y: 0,
        ease: Expo.easeInOut,
        duration: 2,
        delay: -1,
        stagger: .2

    })
    .from("#herofooter",{
        y: -10,
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut
    })
}

function circlemousefollow(){
    window.addEventListener("mousemove",function(dets){
        document.querySelector("#circle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;

    })
}
circlemousefollow();
firstPageAnim();




// teeno element ko select kro, uske badd teeno par ek mousemove lagao 
// jab mousemove ho to ye pata kro ki mouse kaha par hai.
// jiska matlab hain mouse ki x and y position pata karo ,
// ab mouse ki x and y position ke badle uss image ko show karo and us image ko move karo 
//move karte waqt roatate karo, and jaise jaisew mouse tez chale waise waise rotation tez hojaye 



// document.querySelectorAll(".elem").forEach(function (elem){ 
//     // console.log(elem);
//     elem.addEventListener("mousemove", function(details){
//         // console.log(elem.querySelector("img"))
//        gsap.to(elem.querySelector("img"),{
//         opacity: 1,
//         ease: Power1.easeInOut,

//        });
//     });
// });





document.querySelectorAll(".elem").forEach(function (elem) {
    const image = elem.querySelector("img");

    // Set initial state
    gsap.set(image, {
        display: 'none',
        opacity: 0,
        x: 0,
        y: 0,
    });

    // Add event listeners to each element
    elem.addEventListener("mouseenter", function (event) {
        // Animate to desired state on mouseenter
        gsap.to(image, {
            display: 'block',
            opacity: 1,
            ease: Power1.easeInOut,
        });
    });

    elem.addEventListener("mouseleave", function () {
        // Animate back to initial state on mouseleave
        gsap.to(image, {
            display: 'none',
            opacity: 0,
            x: 0,
            y: 0,
            ease: Power1.easeInOut,
        });
    });

    elem.addEventListener("mousemove", function (event) {
        // Calculate the position based on the mouse
        const rect = elem.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        // Animate image to follow mouse without delay
        gsap.to(image, {
            x: mouseX,
            y: mouseY,
            ease: Power1.easeInOut,
            duration: 0.1, // Adjust duration as needed
        });
    });
});
