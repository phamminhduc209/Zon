(function($){
	"use strict";

  // btn show menu
  $('.zon-btn-menu').on('click', function() {
      $(this).toggleClass('zon-btn-menu-close');
      $(this).parent().find('.menu').slideToggle();
  });

  /** Menu submenu **/
  $(document).ready(function(){
    $('.menu li.parent').append('<span class="arrow"></span>');
    $('.menu li.parent .arrow').click(function(){
      $(this).toggleClass('open').siblings('.level1').slideToggle();
    });
  });

})(jQuery); // End of use strict