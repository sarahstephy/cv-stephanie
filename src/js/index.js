emojione.imageType = 'png';
emojione.sprites = true;

$(document).ready(function(){

  $("body").css("background-color","yelllow");
  $(".link").hover(function() {
    $(".div3").animate({ opacity: 0},1);
    $(".div3").clearQueue();
    $("body").css("background-color", "blue");
  }, function() {
    $(".div3").animate({ opacity: 1} ,1);
    $(".div3").clearQueue();
    $("body").css("background-color", "yellow");
  });
});
