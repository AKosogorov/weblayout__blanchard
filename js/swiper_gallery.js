document.addEventListener('DOMContentLoaded', function() {
  const SWIPER_GALLERY = new Swiper('.gallery__swiper', {
    breakpoints: {
      200: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 34,
        slidesPerGroup: 4,
      },
      1510: {
        slidesPerView: 6,
        spaceBetween: 50,
        slidesPerGroup: 6,
      },
    },
    loop: false,
    navigation: {
      nextEl: '.gallery__swiper-btn_next',
      prevEl: '.gallery__swiper-btn_prev',
    },
    pagination: {
      el: '.gallery__swiper-pagination',
      type: 'fraction',
    },
    keyboard: {
      enabled: true,
    },
    a11y: {
      enabled: false,
    },
  });
});

