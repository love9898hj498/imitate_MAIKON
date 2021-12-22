// back top
$(document).ready(function(){
    $('.back_top').click(function(){ 
        $('html,body').animate({scrollTop:0}, 888);
    });
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 300 ){
            $('.back_top').fadeIn(222);
        } else {
            $('.back_top').stop().fadeOut(222);
        }
    }).scroll();
});


// navbar fixed
$(document).ready(function(){
    $(window).scroll(function() {
        let scrollTop = $(window).scrollTop();
        let navbarheight = $('#js_navbar').height();
        
        if (scrollTop > 0 ){
            $('#js_navbar').addClass('fixed');
            $('body').css('paddingTop', navbarheight);
        } else {
            $('#js_navbar').removeClass('fixed');
            $('body').css('paddingTop', 0);
        }
    });
})



// Counter

const counterUp = window.counterUp.default

const callback = entries => {
	entries.forEach( entry => {
		const el = entry.target
		if ( entry.isIntersecting && ! el.classList.contains( 'is-visible' ) ) {
			counterUp( el, {
				duration: 2000,
				delay: 16,
			} )
            counterUp( js_counter_2, {
				duration: 2000,
				delay: 16,
			} )
            counterUp( js_counter_3, {
				duration: 2000,
				delay: 16,
			} )
            counterUp( js_counter_4, {
				duration: 2000,
				delay: 16,
			} )
			el.classList.add( 'is-visible' )
		}
	} )
}

const IO = new IntersectionObserver( callback, { threshold: 1 } )

const el = document.querySelector( '.js_counter' )
const js_counter_2 = document.querySelector( '.js_counter_2' )
const js_counter_3 = document.querySelector( '.js_counter_3' )
const js_counter_4 = document.querySelector( '.js_counter_4' )

IO.observe( el )



// .work_steps_box scroll 

$(document).ready(function(){
    $(document).scroll(function(e){
      if ($(this).scrollTop() >= 2800){ 
        $('.js_scroll_1').css("opacity", "1");
      }
      if($(this).scrollTop() >= 3150){
        $('.js_scroll_2').css("opacity", "1");
      }
      if($(this).scrollTop() >= 3300){
        $('.js_scroll_3').css("opacity", "1");
      }
      if($(this).scrollTop() >= 3534){
        $('.js_scroll_4').css("opacity", "1");
      }
      if($(this).scrollTop() >= 3833){
        $('.js_scroll_5').css("opacity", "1");
      }
    });  
});
// 

AOS.init();