$(document).ready(function () {

  // slider PlugIn

  $('.slick').slick({
    dots: false,             //顯示輪播圖片會顯示圓圈
    infinite: true,         //重覆輪播
    slidesToShow: 1,         //輪播顯示個數
    slidesToScroll: 1,      //輪播捲動個數
    autoplay: true,         //autoplay : 自動播放
    responsive: [

      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true
        }
      }]
  });

  $('.slick4').slick({
    dots: false,             //顯示輪播圖片會顯示圓圈
    infinite: true,         //重覆輪播
    slidesToShow: 4,         //輪播顯示個數
    slidesToScroll: 4,      //輪播捲動個數
    autoplay: true,         //autoplay : 自動播放
    responsive: [

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: true
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }]
  });

  $('.slick5').slick({
    dots: false,             //顯示輪播圖片會顯示圓圈
    infinite: true,         //重覆輪播
    slidesToShow: 5,         //輪播顯示個數
    slidesToScroll: 2,      //輪播捲動個數
    autoplay: true,         //autoplay : 自動播放
    responsive: [

      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }]
  });

  $('.slick6').slick({
    dots: false,             //顯示輪播圖片會顯示圓圈
    infinite: true,         //重覆輪播
    slidesToShow: 6,         //輪播顯示個數
    slidesToScroll: 4,      //輪播捲動個數
    autoplay: true,         //autoplay : 自動播放
    responsive: [

      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
          arrows: false
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          arrows: false
        }
      }]
  });

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    focusOnSelect: true
  });


  $('#features').on("click", '.right', function (e) {
    $('#features').find('.slick-next').click();
  });

  $('#features').on("click", '.left', function (e) {
    $('#features').find('.slick-prev').click();
  });

  $('#seller').on("click", '.right', function (e) {
    $('#seller').find('.slick-next').click();
  });

  $('#seller').on("click", '.left', function (e) {
    $('#seller').find('.slick-prev').click();
  });

  $('#workspace').on("click", '.right', function (e) {
    $('#workspace').find('.slick-next').click();
  });

  $('#workspace').on("click", '.left', function (e) {
    $('#workspace').find('.slick-prev').click();
  });

  // slider PlugIn end

  // shopping-cart pop, 
  $('.shopping-cart').on("click", function (e) {
    e.stopPropagation();
    $('.popup').stop().fadeToggle();
    $('.dropdown-cart').stop().fadeToggle();
  });

  $('.popup').on("click", function () {
    $('.popup').stop().fadeOut();
    $('.dropdown-cart').stop().fadeOut();
  })

  // pages pop
  $('.nav-pages').on("click", function (e) {
    e.stopPropagation();
    $('.popup').stop().fadeToggle();
    $('.page-pop').stop().fadeToggle();
    pagesArrow(e);
  });

  $('.popup').on("click", function (e) {
    $('.popup').fadeOut();
    $('.page-pop').fadeOut();
  });

  $('.navbar-collapse').on("click", function (e) {
    $('.popup').fadeOut();
    $('.page-pop').fadeOut();
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

  // letter pop
  setTimeout(function () {
    $('.popup.timeout').fadeIn();
    $('.pop-letter').fadeIn();
  }, 2000);

  $('.popup.timeout').on("click", function (e) {
    $('.popup.timeout').fadeOut();
    $('.pop-letter').fadeOut();
  })

  $('.pop-letter').find('.delete').on("click", function () {
    $('.popup').click();
  })

  // search-page 
  $('#search-page.searching').find('.icon-cancel').on("click", function () {
    $('#search-page.searching').removeClass('open');
  })

  $('.navbar-nav').find('.nav-search').on("click", function () {
    $('#search-page.searching').toggleClass('open');
  })

  // blog-index img-board fade-in 
  $(document).scroll(function () {
    if ($(this).scrollTop() > 900) {
      $('.img-group img').addClass('fade');
    }
  })
  // blog-index scroll to message-wall
  $('#blog-content .comment').on("click", function (e) {
    e.preventDefault();
    var offset = $('.message-wall').offset();

    $('html, body').animate({ scrollTop: offset.top });
  })

  // product-list mobile category dropdown
  $('.product-sidebar .drop-filter').on("click", function (e) {
    $('.product-sidebar .filter').toggleClass('filter-open');
  });

  $('.product-sidebar .drop-categories').on("click", function (e) {
    $('.product-sidebar .product-categories').toggleClass('categories-open');
  })

  $(function () {
    $("#slider-range").slider({
      range: true,
      min: 0,
      max: 600,
      values: [10, 599],
      slide: function (event, ui) {
        $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
      }
    });
    $("#amount").val("$" + $("#slider-range").slider("values", 0) +
      " - $" + $("#slider-range").slider("values", 1));
  });

  // validation 
  (function () {
    'use strict';
    window.addEventListener('load', function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

  $('#procced-checkout').on("click", function (e) {
    $('#validation').click();
  })

  // pages popover 

  $('[data-toggle="popover"]').popover('show');

  // large slider js practice

  // var sliderImg = document.getElementById("slider");
  // var circle1 = document.getElementById("circle1");
  // var circle2 = document.getElementById("circle2");
  // var circle3 = document.getElementById("circle3");
  // var circleIndex = 1;
  // var time = null;

  // circle1.addEventListener("click", showImg);
  // circle2.addEventListener("click", showImg);
  // circle3.addEventListener("click", showImg);

  // function showImg() {
  //   circleIndex = Number(this.id.substr(6));
  //   sliderImg.innerHTML = '<img src="images/slider/owl'+this.id+'.jpg" alt="counter stool">';
  //   circleActive();
  //   // clearInterval(time);
  //   // timeStart();
  // }

  // function circleActive() {
  //   for(var i = 1; i < 4; i++){
  //     document.getElementById("circle" + i).classList.remove("dark");
  //   }
  //   document.getElementById("circle" + circleIndex).classList.add("dark");
  // }

  // // function timeStart() {
  // //   time = setInterval(function(){
  // //     circleIndex ++;
  // //     if (circleIndex > 3) {
  // //       circleIndex = 1;
  // //     }
  // //     sliderImg.innerHTML = '<img src="images/slider/owlcircle'+circleIndex+'.jpg" alt="counter stool">';
  // //     circleActive();
  // //   }, 1000);

  // // }

  // // timeStart();

  // document.getElementById("circle" + circleIndex).classList.add("dark");




});

















