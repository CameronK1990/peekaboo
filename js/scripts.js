$(document).ready(function() {
  $(".clickable").click(function() {
    $("#bird-showing").toggle();
    $("#bird-hidden").toggle();
  });


  $(".fade-in").click(function() {
    $(".fade-in").fadeOut();
  });
});
