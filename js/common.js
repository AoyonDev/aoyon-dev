
$(function(){
  $('.top-scroll-btn').on("click",function(){
    $("html,body").animate({scrollTop:0}, 1000)
  })
  
  $(window).on("scroll", function(){
    var scroll = $(this).scrollTop();
    if(scroll >300){
        $(".top-scroll-btn").fadeIn(500)
    }else{
        $(".top-scroll-btn").fadeOut(500)
    }
  })
})






  /* -- Glow effect -- */

$(function(){
  const blob = document.getElementById("blob");

window.onpointermove = event => { 
  const { clientX, clientY } = event;
  
  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 1000, fill: "forwards" });
}
})


// const images = document.getElementsByClassName("image");

// let globalIndex = 0,
//     last = { x: 0, y: 0 };

// const activate = (image, x, y) => {
//   image.style.left = `${x}px`;
//   image.style.top = `${y}px`;
//   image.style.zIndex = globalIndex;

//   image.dataset.status = "active";

//   last = { x, y };
// }

// const distanceFromLast = (x, y) => {
//   return Math.hypot(x - last.x, y - last.y);
// }

// const handleOnMove = e => {
//   if(distanceFromLast(e.clientX, e.clientY) > (window.innerWidth / 20)) {
//     const lead = images[globalIndex % images.length],
//           tail = images[(globalIndex - 5) % images.length];

//     activate(lead, e.clientX, e.clientY);

//     if(tail) tail.dataset.status = "inactive";
    
//     globalIndex++;
//   }
// }

// window.onmousemove = e => handleOnMove(e);

// window.ontouchmove = e => handleOnMove(e.touches[0]);








// common counter up

// $(document).ready(function () {
//     $(".main-counter").counterUp({
//       delay: 10,
//       time: 700,
//     });
//   });




$('.main-counter').counterUp({
  delay: 10,
  time: 1000
});











