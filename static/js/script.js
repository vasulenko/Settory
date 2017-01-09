//  $(function(){
//  $('.picture').height($('.picture').width());
// });
// $(window).resize(function(){        $('.picture').height($('.picture').width());
// });

$(window).scroll(function() {
    if ($(window).scrollTop() >= 15){
    } else {
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
