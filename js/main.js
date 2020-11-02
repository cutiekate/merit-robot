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