document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.catalog__tabs-btn').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      document.querySelector('.catalog__tabs-btn_active').classList.remove('catalog__tabs-btn_active');
      const path = event.currentTarget.dataset.path;
      tabsBtn.classList.add('catalog__tabs-btn_active');
      document.querySelectorAll('.catalog__tab-content').forEach(function(tabContent) {
        tabContent.classList.remove('catalog__tab-content_active');
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__tab-content_active')
      document.querySelectorAll('.catalog__accordion-link').forEach(function(painterLink) {
        painterLink.classList.remove('catalog__accordion-link_active');
      });
      document.querySelectorAll('.catalog__painter_active').forEach(function(painter) {
        painter.classList.remove('catalog__painter_active');
      });
      document.querySelector(`[data-target="${path}"] > .catalog__painter-unknow`).classList.add('catalog__painter_active')
    });
  });
});
