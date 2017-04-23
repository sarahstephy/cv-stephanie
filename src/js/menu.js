$(document).ready(function(){
$('#mobile-button').click(function(){
  $('#menu-container').show();
  $('#mobile-button').hide();
  $('#mobile-close').show();
});

$('#mobile-close').click(function(){
  $('#menu-container').hide();
  $('#mobile-button').show();
  $('#mobile-close').hide();
});
});
