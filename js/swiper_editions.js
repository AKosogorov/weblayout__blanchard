document.addEventListener('DOMContentLoaded', function() {
  const SWIPER_EDITIONS = new Swiper('.editions__swiper', {
    enabled: false,
    breakpoints: {
      768: {
        enabled: true,
        slidesPerView: 2,
        spaceBetween: 34,
        slidesPerGroup: 2,
      },
      1024: {
        enabled: true,
        slidesPerView: 2,
        spaceBetween: 50,
        slidesPerGroup: 2,
      },
      1510: {
        enabled: true,
        slidesPerView: 3,
        spaceBetween: 25,
        slidesPerGroup: 3,
      },
      1700: {
        enabled: true,
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3,
      },
    },
    loop: false,
    navigation: {
      nextEl: '.editions__swiper-btn_next',
      prevEl: '.editions__swiper-btn_prev',
    },
    pagination: {
      el: '.editions__swiper-pagination',
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
