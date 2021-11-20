document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('a[href^="#"');

  links.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      if (link.classList.contains('catalog__accordion-link') && window.innerWidth > 1023 || link.classList.contains('gallery__swiper-slide')) {
        return;
      };
      const ID = link.getAttribute('href');
      document.querySelector(ID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
});
