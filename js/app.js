$(function() {
  $('.left-btn').click(function() {
        $next_active = $('.active').prev();
        if ($next_active.size() == 0) {
             alert("Please Click Right Button"); 
             return;
        }
        $('.difficult-section article').removeClass('active move-left move-right');
        $next_active.addClass('active');
        $next_active.prevAll().addClass('move-left');
        $next_active.nextAll().addClass('move-right');
   });

    $('.right-btn').click(function() {
        $next_active = $('.active').next();
        if ($next_active.size() == 0) {
             alert("Please Click left Button"); 
             return;
        }
    $('.difficult-section article').removeClass('active move-left move-right');
    $next_active.addClass('active');
    $next_active.prevAll().addClass('move-left');
    $next_active.nextAll().addClass('move-right');
   });


});

