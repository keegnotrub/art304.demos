$(document).ready(function() {
  $("ul.nav a").click(function(e) {
    var href = $(this).attr("href");
    $("html,body").animate({
      scrollLeft: $(href).offset().left
    }, 1000);
    e.preventDefault();
  });
});