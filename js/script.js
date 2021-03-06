  // Run function depends on Page
  if ($('.site-wrapper').hasClass('home_page')) {
    homepage()
  } else if ($('.site-wrapper').hasClass('activities_page')) {
    activitiespage()
  }

  function homepage() {

    let swiper1 = new Swiper(".home_slider", {
      navigation: {
        nextEl: '.slider-right-btn',
        prevEl: '.slider-left-btn',
      },
    });
    let swiper2 = new Swiper(".cardsSlider", {
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
    let swiper3 = new Swiper(".partnersSlider", {
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

  }

  function activitiespage() {
    let swiper = new Swiper(".cardsSlider", {
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
  }

  // MENU SCRIPT
  $(document).ready(function () {
    new WOW().init();

    let partnersSlider = new Swiper(".flagsSlider", {
      breakpoints: {
        "1440": {
          slidesPerView: 6,
          spaceBetween: 0,
        },
        "1144": {
          spaceBetween: 0,
          slidesPerView: 5,
        },
        "900": {
          spaceBetween: 0,
          slidesPerView: 4,
        },
        "768": {
          spaceBetween: 5,
          slidesPerView: 3,
        },
        "512": {
          spaceBetween: 20,
          slidesPerView: 2,
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


    let newsSlider = new Swiper(".newSLider", {
      effect: 'fade',
      navigation: {
        nextEl: '.new-slider-nextBtn',
        prevEl: '.new-slider-prevBtn',
      },
    });




    $(window).scroll(function () {
      if ($(window).scrollTop() > 100) {
        $('.nav-btn-title').fadeOut(function () {
          $('.nav-btn').addClass('nav-collapse')
        });

      } else {
        $('.nav-btn-title').fadeIn();
        $('.nav-btn').removeClass('nav-collapse')
      }
    });



    // TABS in GALLERY
    $('.main-gallery--tabs-btn').on('click', function (e) {
      e.preventDefault()

      $('.main-gallery--tabs-btn').removeClass('active')
      $(this).addClass('active');
      let btnAttr = $(this).attr('data-target-content');
      let cardAttr = $('.card-content');


      cardAttr.filter(function () {

        if (btnAttr === 'photos') {
          $('.main-gallery--videos').fadeOut(function () {
            $('.main-gallery--photos').fadeIn()

          })


        } else if (btnAttr === 'videos') {
          $('.main-gallery--photos').fadeOut(function () {
            $('.main-gallery--videos').fadeIn()

          })
        }

      })
    })




    // FULL-MENU
    $('#open-menu').on('click', function () {
      $('.full-nav').fadeToggle()
      $('.nav-btn-title').fadeIn();
      $('.nav-btn').removeClass('nav-collapse')
      $(this).toggleClass('nav-btn--menuOpen')
      $('.full-nav').toggleClass('active');
      $('html').toggleClass('stopScroll')
    })

  });