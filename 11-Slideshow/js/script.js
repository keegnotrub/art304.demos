$(document).ready(function() {
  $('div.slideshow img:gt(0)').hide();
  setInterval(function(){
    $('div.slideshow img:eq(0)').fadeOut(1000);
    $('div.slideshow img:eq(1)').fadeIn(1000);
    $('div.slideshow img:eq(0)').appendTo('div.slideshow');
  }, 3000);
});
