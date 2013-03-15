jQuery(document).ready(function($) {
  $('body').prepend('<div id="viewport-size">0</>');
  $('#viewport-size').css({
    padding:'5px',
    background:'#B02A2A',
    color:'#fff',
    position:'fixed',
    'z-index':'1000',
    top:0,
    left:0
  });

  $('body').prepend('<div id="viewport-scroll">0</>');
  $('#viewport-scroll').css({
    padding:'5px',
    background:'#0EA17C',
    color:'#fff',
    position:'fixed',
    'z-index':'1000',
    top: 40,
    left:0
  });

  $('#viewport-size').html($(window).scrollTop());
  $('#viewport-scroll').html($(window).width()+' | '+$(window).height());

  $(window).scroll(function(){
    $('#viewport-size').html($(this).scrollTop());
  });

  $(window).resize(function(){
    $('#viewport-scroll').html($(this).width()+' | '+$(this).height());
  });
});
