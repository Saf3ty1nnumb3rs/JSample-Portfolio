const DisplayCarrier = {

    topFade: function(){


var header = $('.top-section, .bottom-logo');
var range = 200;

$(window).on('scroll', () => {
  
  var scrollTop = $(this).scrollTop(),
      height = header.outerHeight(),
      offset = height / 2,
      calc = 1 - (scrollTop - offset + range) / range;
        header.css({ 'opacity': calc });

    if (calc > '1') {
        header.css({ 'opacity': 1 });
    } else if ( calc < '0' ) {
        header.css({ 'opacity': 0 });
    }
  
});
    },

    navFill: function() {
        var scrollStart = 0;
        var startChange = $('#start-change')
        var offset = startChange.offset()
        $(document).scroll(() => {
            scrollStart = $(this).scrollTop();
            console.log(scrollStart)
            console.log(offset.top)
            if(scrollStart > offset.top) {
                $('#nav-fill>div').css({'background-color': 'rgba(126, 126, 126, 0.9)', 'z-index':'900', 'transition':'1s'});
            } else {
               $('#nav-fill>div').css('background-color', 'transparent');
            } 
        })

    },


}

const ClickController = {
// Need to set if sttement to check for has class 'is-active' then do below if false



    hamburgerHelper: function(){

        if($('button.hamburger').hasClass('is-active')){
            
            $('.menu-overlay').removeClass('open');
            $('.contact-build').removeClass('closed');
            $('button.hamburger').removeClass('is-active');
            
// Set else statement to perform the opposite of above - easy-peezy
            } else {
                $('button.hamburger').addClass('is-active');
                $('.menu-overlay').addClass('open');
                $('.contact-build').addClass('closed');

            }

},




}







window.onload = function () {
    $('.hamburger').on('click', ClickController.hamburgerHelper);
    $(window).on('scroll', DisplayCarrier.topFade);
    $(window).on('scroll', DisplayCarrier.navFill);

}