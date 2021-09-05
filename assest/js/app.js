    $(function () {

        "use strict";
        var wind = $(window);

        /*==================================
         1.ScrollIt 
        ====================================*/
	$.scrollIt({
        upKey: 38, 
        downKey: 40, 
        easing: 'swing', 
        scrollTime: 700, 
        activeClass: 'active',
        onPageChange: null, 
        topOffset: -15 
    });
        /*==================================
        2.Navbar Scrolling 
        ====================================*/

        wind.on("scroll", function () {
            var bodyScroll = wind.scrollTop(),
                navbar = $(".navbar")
            if (bodyScroll > 600) {
                navbar.addClass("fixed-top");
            } else {
                navbar.removeClass("fixed-top");
            }
        });
		/*==================================
        3.parallax Scrolling 
        ====================================*/
		$('.parallax-window').parallax({
			iosFix:true,
			androidFix:true,
			speed:0.1,
		});
		
  // IMAGE LOADED JQUERY START 
     $('.grid').imagesLoaded(function () {
              // images have loaded
              //PORTFOLIO START  
              // init Isotope
            // var $grid = $('.portfolio_items').isotope({
            //   // options
            // });
            // filter items on button click
            // $('.portfolio_menu').on( 'click', 'li', function() {
            //   var filterValue = $(this).attr('data-filter');
            //   $grid.isotope({ filter: filterValue });
            // });
              // filter items on button click
              $('.portfolio_menu').on('click', 'li', function () {
                $(this).addClass('current').siblings().removeClass('current');
              });
              //PORTFOLIO END
            });
          // IMAGE LOADED JQUERY END  

		
    });

       


// on click addClass and removeClass (active-nav)
    $(document).on("click", "ul li", function(){

        $(this).addClass('active_nav').siblings().removeClass('active_nav')
    })

  // on click addClass and removeClass (active-nav)
    $(document).on("click", ".portfolio_menu li", function(){

        $(this).addClass('active').siblings().removeClass('active')
    })
    


    // ===========
    // Type js script
    // ===========

    var typed1 = new Typed('#type', {
      strings: ['Abdul Malik', 'Web Designer', 'Programmer'],
      typeSpeed: 30,
      backSpeed: 50,
      loop: true
    });

  // ===========
  // Type js script (END)
  // ===========

    // ===========
  // Bottom to top btn
  // ===========
  const scrollUp = document.querySelector('#scrollUp');

  window.addEventListener('scroll', () =>{
    if(window.pageYOffset > 100){
      scrollUp.classList.add('active');
    }else{
      scrollUp.classList.remove('active')
    }
  });