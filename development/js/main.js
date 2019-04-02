(function($){
	"use strict";
    $('.zon-btn-menu').on('click', function() {
        $(this).toggleClass('zon-btn-menu-close');
        $(this).next().slideToggle();
    })

})(jQuery); // End of use strict