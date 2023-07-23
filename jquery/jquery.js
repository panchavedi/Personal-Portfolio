$("document").ready(function(){
    $("h1").css("color", "red");

    $.preloadImages = function() {
      for (var i = 0; i < arguments.length; i++) {
        $("<img />").attr("src", arguments[i]);
      }
    }
    
    $.preloadImages("card1.jpg","card2.jpg");



// Replace source
$('img').on("error", function() {
    $(this).attr('src', '/images/missing.png');
  });
  
// Or, hide them
$("img").on("error", function() {
    $(this).hide();
  });

});