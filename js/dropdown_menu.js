document.addEventListener('DOMContentLoaded', function() {

  function closeDropdownMenu() {
    document.querySelectorAll('.header__dropdown-btn').forEach(function(dropdownBtn) {
      dropdownBtn.classList.remove('header__dropdown-btn_active');
    });
    document.querySelectorAll('.header__dropdown-menu').forEach(function(dropdownMenu) {
      dropdownMenu.classList.remove('header__dropdown-menu_active');
    });
  };

  document.querySelectorAll('.header__dropdown-btn').forEach(function(dropdownBtn) {
    dropdownBtn.addEventListener('click', function(event) {
      if (dropdownBtn.classList.contains("header__dropdown-btn_active")) {
        closeDropdownMenu();
      } else {
      closeDropdownMenu();
      const path = event.currentTarget.dataset.path;
      dropdownBtn.classList.add('header__dropdown-btn_active');
      document.querySelector(`[data-target="${path}"]`).classList.add('header__dropdown-menu_active');
      };
    });
  });

  window.onclick = function(e) {
    if (!e.target.matches('.header__dropdown-btn') && !e.target.matches('.header__dropdown-menu')) {
      closeDropdownMenu();
    };
  };
});
