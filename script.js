var hero = gsap.timeline();
var page2 = gsap.timeline(page2, {
  opacity:0,
  duration:2,
  scrollTrigger:{
          trigger:"",
          scroller:"body",
          start:"top 60%",
          markers:true
        }
});
var page3 = gsap.timeline();
var page4 = gsap.timeline();

hero
.from("#nav1,#nav2",{
  opacity:0,
  y:-20,
  duration:0.7,
  delay:5
})
.from(".object1", {
  opacity:0,
  scale:0.5
})
.from(".object4,.object5",{
    opacity:0,
    x:50,
    duration:0.9
})
.from(".object3", {
    opacity:0,
    scale:0.1,
    x:100,
    duration:0.2,
    delay:0
})
.from(".object8", {
    opacity:0,
    x:-100,
    duration:0.4
})



page2
.from(".page2-heading h1", {
  y:-20,
  opacity:0,
  duration:0.8
})
.from("#product22, #product42",{
  opacity:0,
  duration:0.5,
  scale:0.1,
})
.from("#product21, #product41",{
  x:-100,
  opacity:0,
  duration:0.5,
  // scale:0.1,
})
.from("#product23, #product43",{
  x:100,
  opacity:0,
  duration:0.5,
  // scale:0.1,
})
.from("object6,.object7,.object2",{
  opacity:0,
  y:50,
})


page3
.from(".p3-text",{
  x:-100,
  opacity:0,
  duration:1
  // scale:0.1,
})
.from(".p3-img",{
  x:100,
  opacity:0,
  duration:0.5
})
.from(".stiker",{
  opacity:0,
  scale:0
})

// =====================object movement on mouse move======================== 

document.addEventListener("mousemove", parallax);
function parallax(e) {
  document.querySelectorAll("#object").forEach(function (move) {
    var moving_value = move.getAttribute("data-value");
    var x = (e.clientX * moving_value) / 200;
    var y = (e.clientY * moving_value) / 200;

    move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
  });
}

const btn = document.getElementById("#btn");

btn.addEventListener('click', () => {
    btn.style.display = "#715bf4";

});



























































































































































































































