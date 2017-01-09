//  $(function(){
//  $('.picture').height($('.picture').width());
// });
// $(window).resize(function(){        $('.picture').height($('.picture').width());
// });

$(window).scroll(function() {
    if ($(window).scrollTop() >= 15){
        $('header').addClass('header--hidden');
    } else {
        $('header').removeClass('header--hidden');
    }
})
   $(document).ready(function(){
      $('.bxslider').bxSlider({
          auto: true,
          autoControls: true,
          touchEnabled: false,
          controls: false,
          pause: 5000
    });
});
