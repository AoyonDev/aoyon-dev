// up button 
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

// counter up 
$('.main-counter').counterUp({
  delay: 10,
  time: 1000
});
// loader 
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader--hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild(loader);
  });
});












