document.addEventListener("DOMContentLoaded", function () {
  const burgerBtn = document.getElementById("burger-btn");
  const navMenu = document.getElementById("nav-menu");

  burgerBtn.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });
});

// video scripts
$(document).ready(function() {
// get video source from data-src button
var $videoSrc;  
$('.video-btn').click(function() {
    $videoSrc = $(this).data( "src" );
});
console.log($videoSrc);
// autoplay video on modal load  
$('#myModal').on('shown.bs.modal', function (e) {
// youtube iframe configuration and settings
$("#video").attr('src',$videoSrc + "?autoplay=1&rel=0&controls=1&loop=1&modestbranding=1"); 
})
// stop playing the youtube video when modal closed
$('#myModal').on('hide.bs.modal', function (e) {
    // stop video
    $("#video").attr('src',$videoSrc); 
}) 
});
