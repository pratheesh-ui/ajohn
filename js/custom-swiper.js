$(document).ready(function () {
 
    
    var swiper = new Swiper(".swiper-hero", {
  slidesPerView: 1,
  spaceBetween: 30,
    speed:800,
  centeredSlides: false,
  grabCursor: true,
  loop: true,
 // autoplay:false,
autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },
 navigation: {
    nextEl: '.swiper-hero .swiper-button-next',
    prevEl: '.swiper-hero .swiper-button-prev',
  },
        
        pagination: {
      el: ".swiper-pagination",
        clickable: true,
    },

  breakpoints: {
    0: {
      slidesPerView: 1,
          
        
    },
    578: {
      slidesPerView: 1,
          
      
    },
     
      992: {
      slidesPerView: 1,
         
      
    },
      
     
  }
}); 
    
    
    });
 