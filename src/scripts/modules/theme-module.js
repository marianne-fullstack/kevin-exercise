AppName.Modules.ThemeModule = (function() {
  //Dependencies
  var core = AppName.Core;

  //////////////////////
  // Private Methods //
  ////////////////////
  var _privateMethod = function() {
    // private stuff

    // animate on scroll
    AOS.init();

    var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
      },
    });
  };

  /////////////////////
  // Public Methods //
  ///////////////////
  var init = function() {
    _privateMethod();
  };

  return {
    init: init
  };
})();
