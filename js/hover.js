$(document).ready(function () {

  // pages pop hover
  $('.nav-pages').on("mouseenter", function (e) {
    
    $('.page-pop.pages').stop().addClass('open');
    pagesArrow(e);
  });

  $('.nav-pages').on("mouseleave", function () {
    $('.page-pop.pages').stop().removeClass('open');
  });

  $('.nav-about').on("mouseenter", function (e) {
    $('.page-pop.about').stop().addClass('open');
    pagesArrow(e);
  });

  $('.nav-about').on("mouseleave", function () {
    $('.page-pop.about').stop().removeClass('open');
  });

  // pages arrow

  function pagesArrow(e) {
    $(window).resize(function () {
      pagesArrow(e);
    })
    var arrowLeft = $('.page-pop .arrow').offset().left;
    var navLeft = $(e.currentTarget).offset().left + $(e.currentTarget).width() / 2;
    var pageWidth = $('.page-pop.desktop').outerWidth();
    var windowWidth = $(window).width();
    var pageLeftWidth = (windowWidth - pageWidth) / 2;

    arrowLeft = (navLeft - pageLeftWidth) * 100 / pageWidth + '%';
    $('.page-pop .arrow').css('left', arrowLeft);
  }

});

















