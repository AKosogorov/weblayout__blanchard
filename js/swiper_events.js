document.addEventListener('DOMContentLoaded', function() {
  const SWIPER_EVENTS = new Swiper('.events__swiper', {
    loop: false,
    pagination: {
      el: '.events__swiper-pagination',
      clickable: true,
    },
    keyboard: {
      enabled: true,
    },
    a11y: {
      enabled: false,
    },
    breakpoints: {
      200: {
        enabled: true,
        slidesPerView: 1,
        spaceBetween: 30,
      },
      768: {
        enabled: false,
      },
    },
  });
});
