document.addEventListener('DOMContentLoaded', function() {
  const SWIPER_PROJECTS = new Swiper('.projects__swiper', {
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 34,
        slidesPerGroup: 2,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 50,
        slidesPerGroup: 2,
      },
      1510: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3,
      },
    },
    loop: false,
    navigation: {
      nextEl: '.projects__swiper-btn_next',
      prevEl: '.projects__swiper-btn_prev',
    },
    keyboard: {
      enabled: true,
    },
    a11y: {
      enabled: false,
    },
  });
});
