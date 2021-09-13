var swiper = new Swiper(".home_slider", {
    navigation: {
        nextEl: '.slider-right-btn',
        prevEl: '.slider-left-btn',
    },
});



var swiper = new Swiper(".cardsSlider", {
    breakpoints: {
        
        "1440": {
          slidesPerView: 3,
          spaceBetween: 50,
        },
        "1144": {
          spaceBetween: 50,
          slidesPerView: 3,
          },
        "768": {
            slidesPerView: 2,
          },
      },
      navigation: {
        nextEl: '.cardsSlider-right-btn',
        prevEl: '.cardsSlider-left-btn',
    },
});


var swiper = new Swiper(".partnersSlider", {
    breakpoints: {
        
        "1440": {
          slidesPerView: 4,
          spaceBetween: 0,
        },
        "1144": {
          spaceBetween: 0,
          slidesPerView: 3,
          },
          "900": {
            spaceBetween: 0,
            slidesPerView: 3,
            },
        "768": {
          spaceBetween: 5,
          slidesPerView: 2,
          },
          "512": {
          spaceBetween: 20,
          slidesPerView: 1,
          },
          "450": {
          slidesPerView: 1,
          },
      },
      navigation: {
        nextEl: '.partnersSlider-button-next',
        prevEl: '.partnersSlider-button-prev',
    },
});