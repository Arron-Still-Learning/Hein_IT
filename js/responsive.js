$(function(){
  $('.btn-gnavi').on('click', function(){
    console.log('Button clicked'); // Debugging line
    var topVal = 0;
    if ($(this).hasClass('hb-open')){
      topVal = -518; // Menu hidden
      $(this).removeClass('hb-open');
    } else {
      topVal = 0; // Menu shown
      $(this).addClass('hb-open');
    }

    $('.gnav').stop().animate({
      top: topVal
    }, 200);
  });
});
