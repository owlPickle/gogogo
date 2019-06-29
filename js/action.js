$(document).ready(function(){
	
  // slider PlugIn
  
  $('.slick').slick({
      dots: false,             //顯示輪播圖片會顯示圓圈
      infinite: true,         //重覆輪播
      slidesToShow:1,         //輪播顯示個數
      slidesToScroll: 1,      //輪播捲動個數
      autoplay: true,         //autoplay : 自動播放
      responsive: [
 
      {
        breakpoint: 1000,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:true
        }
      },
      {
        breakpoint: 320,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:true
        }
      }]
  });
  
  $('.slick4').slick({
      dots: false,             //顯示輪播圖片會顯示圓圈
      infinite: true,         //重覆輪播
      slidesToShow:4,         //輪播顯示個數
      slidesToScroll: 4,      //輪播捲動個數
      autoplay: true,         //autoplay : 自動播放
      responsive: [
 
      {
        breakpoint: 900,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows:true
        }
      },
      {
        breakpoint: 576,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:false
        }
      }]
  });
  
  $('.slick5').slick({
      dots: false,             //顯示輪播圖片會顯示圓圈
      infinite: true,         //重覆輪播
      slidesToShow:5,         //輪播顯示個數
      slidesToScroll: 2,      //輪播捲動個數
      autoplay: true,         //autoplay : 自動播放
      responsive: [
 
      {
        breakpoint: 1000,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows:false
        }
      },
      {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:false
        }
      }]
  });
  
  $('.slick6').slick({
      dots: false,             //顯示輪播圖片會顯示圓圈
      infinite: true,         //重覆輪播
      slidesToShow:6,         //輪播顯示個數
      slidesToScroll: 4,      //輪播捲動個數
      autoplay: true,         //autoplay : 自動播放
      responsive: [
 
      {
        breakpoint: 1000,
        settings: {
            slidesToShow: 6,
            slidesToScroll: 2,
            arrows:false
        }
      },
      {
        breakpoint: 576,
        settings: {
            slidesToShow: 6,
            slidesToScroll: 1,
            arrows:false
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
  
  
  $('#features').on("click", '.right', function(e){
    $('#features').find('.slick-next').click();
  });
  
  $('#features').on("click", '.left', function(e){
    $('#features').find('.slick-prev').click();
  });
  
  $('#seller').on("click", '.right', function(e){
    $('#seller').find('.slick-next').click();
  });
  
  $('#seller').on("click", '.left', function(e){
    $('#seller').find('.slick-prev').click();
  });
  
  $('#workspace').on("click", '.right', function(e){
    $('#workspace').find('.slick-next').click();
  });
  
  $('#workspace').on("click", '.left', function(e){
    $('#workspace').find('.slick-prev').click();
  });
  
  // slider PlugIn end

  // shopping-cart pop
  $('.shopping-cart').on("click", function(e){
    $('.popout').addClass('pop-open');
  });

  $('.popout').on("click", function(e){
    
    var deleteItem = $('.delete'); 
    
    if (e.target != deleteItem) {
      console.log(deleteItem);
      console.log(e.target);
      
      
      $('.popout').removeClass('pop-open');

    }
    
    
  });

  // blog-index img-board fade-in 
  $(document).scroll(function(){
    if ($(this).scrollTop() > 900) {
      $('.img-group img').addClass('fade');
    }
  })
  // blog-index scroll to message-wall
  $('#blog-content .comment').on("click", function(e){
    e.preventDefault();
    var offset = $('.message-wall').offset();
    
    $('html, body').animate({scrollTop: offset.top});
  })

  // product-list mobile category dropdown
  $('.product-sidebar .drop-filter').on("click", function(e){
    $('.product-sidebar .filter').toggleClass('filter-open');
  });

  $('.product-sidebar .drop-categories').on("click", function(e){
    $('.product-sidebar .product-categories').toggleClass('categories-open');
  })

  $( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 600,
      values: [ 10, 599 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
  } );

  





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














