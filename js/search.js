document.addEventListener('DOMContentLoaded', function() {

  document.querySelector('.header__search-btn').addEventListener('click', function () {
    document.querySelector('.header__form').classList.toggle('header__form_active');
    document.querySelector('.header__input').classList.toggle('header__input_active');
    document.querySelector('.header__search-closed-btn').classList.toggle('header__search-closed-btn_active');
  });

  document.querySelector('.header__search-closed-btn').addEventListener('click', function () {
    document.querySelector('.header__form').classList.remove('header__form_active');
    document.querySelector('.header__input').classList.remove('header__input_active');
    document.querySelector('.header__search-closed-btn').classList.remove('header__search-closed-btn_active');
  });
});
