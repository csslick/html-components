$(function(){

  $('#gnb > ul > li').hover(
    function(){
      $(this).children('.depth2').addClass('on');
    },
    function(){
      $(this).children('.depth2').removeClass('on');
    }
  )

})