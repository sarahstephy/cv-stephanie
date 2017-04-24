// scrolls en about

$(document).ready(function (){
    $("#long").click(function (){
        $('html, body').animate({
            scrollTop: $(".long-story").offset().top
        }, 700);
    });

    $("#short").click(function (){
        $('html, body').animate({
            scrollTop: $(".short-story").offset().top
        }, 1000);
    });

    $(".top").click(function (){
        $('html, body').animate({
            scrollTop: $(".container").offset().top
        }, 1000);
    });

});

//PAGINA HOME HOVERS

$(document).ready(function(){
// LINK WORK

  $("body").css("background-color","white");
  $(".link-work").hover(function() {
    $(".dissapear").animate({ opacity: 0},1);
    $(".dissapear").clearQueue();
    $(".link-about").animate({ opacity: 0},1);
    $(".link-about").clearQueue();
    $(".link-contact").animate({ opacity: 0},1);
    $(".link-contact").clearQueue();
    $("body").css("background-color", "pink");
  }, function() {
    $(".dissapear").animate({ opacity: 1} ,1);
    $(".dissapear").clearQueue();
    $(".link-about").animate({ opacity: 1} ,1);
    $(".link-about").clearQueue();
    $(".link-contact").animate({ opacity: 1} ,1);
    $(".link-contact").clearQueue();
    $("body").css("background-color", "white");
  });
// LINK ABOUT
  $("body").css("background-color","white");
  $(".link-about").hover(function() {
    $(".dissapear").animate({ opacity: 0},1);
    $(".dissapear").clearQueue();
    $(".link-work").animate({ opacity: 0},1);
    $(".link-work").clearQueue();
    $(".link-contact").animate({ opacity: 0},1);
    $(".link-contact").clearQueue();
    $("body").css("background-color", "lightblue");
  }, function() {
    $(".dissapear").animate({ opacity: 1} ,1);
    $(".dissapear").clearQueue();
    $(".link-contact").animate({ opacity: 1} ,1);
    $(".link-contact").clearQueue();
    $(".link-work").animate({ opacity: 1} ,1);
    $(".link-work").clearQueue();
    $("body").css("background-color", "white");
  });

  // LINK CONTACT
      $("body").css("background-color","white");
      $(".link-contact").hover(function() {
        $(".dissapear").animate({ opacity: 0},1);
        $(".dissapear").clearQueue();
        $(".link-work").animate({ opacity: 0},1);
        $(".link-work").clearQueue();
        $(".link-about").animate({ opacity: 0},1);
        $(".link-about").clearQueue();
        $("body").css("background-color", "lightgreen");
      }, function() {
        $(".dissapear").animate({ opacity: 1} ,1);
        $(".dissapear").clearQueue();
        $(".link-about").animate({ opacity: 1} ,1);
        $(".link-aboutt").clearQueue();
        $(".link-work").animate({ opacity: 1} ,1);
        $(".link-work").clearQueue();
        $("body").css("background-color", "white");
      });

      });
