document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.catalog__accordion-link').forEach(function(choiceLink) {
    choiceLink.addEventListener('click', function(event) {
      document.querySelectorAll('.catalog__accordion-link').forEach(function(painterLink) {
        painterLink.classList.remove('catalog__accordion-link_active');
      });
      const path = event.currentTarget.dataset.path;
      choiceLink.classList.add('catalog__accordion-link_active');
      document.querySelectorAll('.catalog__painter').forEach(function(painter) {
        painter.classList.remove('catalog__painter_active');
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__painter_active')
    });
  });
});
