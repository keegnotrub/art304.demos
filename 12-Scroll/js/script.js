$(document).ready(function() {
  $("ul.nav a").click(function(e) {
    var href = $(this).attr("href");
    $("html,body").animate({
      scrollTop: $(href).offset().top
    }, 1000);
    e.preventDefault();
  });
});