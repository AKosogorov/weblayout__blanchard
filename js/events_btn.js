document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.events__btn').addEventListener('click', function () {
    document.querySelectorAll('.events__btn-container').forEach(function(containerBtn) {
      containerBtn.classList.add('events__btn-container_disabled');
    });
    document.querySelectorAll('.events__swiper-slide_disabled').forEach(function(slideEvent) {
      slideEvent.classList.remove('events__swiper-slide_disabled');
    });
    document.querySelector('.events__swiper-slide_disabled-768').classList.remove('events__swiper-slide_disabled-768');
  });
});
