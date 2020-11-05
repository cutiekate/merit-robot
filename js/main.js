new WOW().init();

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        autoplay: true,
        nav: true,
        dots: true,
        responsiveClass:true,
        responsive:{
        414:{
            items:1,
            nav:true
        },
        375:{
            items:1,
            nav:true
        },
        320:{
            items:1,
            nav:true
        },
        425:{
            items:1,
            nav:true
        },
        768:{
            items:2,
            nav:false
        },
        1600:{
            items:3,
            nav:true,
        }
    }
    });
  });

function openTab(tabName) {
    var i;
    var x = document.getElementsByClassName("content");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(tabName).style.display = "flex";  
}

var sections = $('section')
  , nav = $('.scroll-panel')
  , nav_height = nav.outerHeight();

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
  
  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
    
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');
      
      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});

nav.find('a').on('click', function () {
  var $el = $(this)
    , id = $el.attr('href');
  
  $('html, body').animate({
    scrollTop: $(id).offset().top - nav_height
  }, 500);
  
  return false;
});

$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
$(document).ready(function(){
  $("#menu-2").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
  });
});

