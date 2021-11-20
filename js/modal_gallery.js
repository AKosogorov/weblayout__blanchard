document.addEventListener('DOMContentLoaded', function() {
  const body = document.querySelector('body');
  const modal = document.querySelectorAll('.gallery__modal');
  const linkToModal = document.querySelectorAll('.gallery__swiper-slide');
  const btnCloseModal = document.querySelectorAll('.gallery__modal-btn');

  linkToModal.forEach(function(linkToModal){
    linkToModal.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path;
      document.querySelector(`[data-target="${path}"]`).classList.add('gallery__modal_active');
      if (window.innerWidth < 1023 || window.innerWidth > 1300) {
        body.classList.add('modal-open');
      };
    });
  });

  btnCloseModal.forEach(function(btnCloseModal){
    btnCloseModal.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path;
      document.querySelector(`[data-target="${path}"]`).classList.remove('gallery__modal_active');
      body.classList.remove('modal-open');
    });
  });

  modal.forEach(function(modal){
    modal.addEventListener('click',function(event){
      if (event.target == modal) {
        modal.classList.remove('gallery__modal_active');
        body.classList.remove('modal-open');
      };
    });
  });
});
