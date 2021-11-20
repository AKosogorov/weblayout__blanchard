document.addEventListener('DOMContentLoaded', function() {

  let checkItem = document.querySelectorAll('.editions__check-item');
  let checkBtn = document.querySelectorAll('.editions__check-btn');
  let checkbox = document.querySelectorAll('.editions__check-input');

  document.querySelector('.editions__caption_check').addEventListener('click', function () {
    document.querySelector('.editions__caption_check').classList.toggle('editions__caption_check-open');
    checkItem.forEach(function(checkItem) {
      if (!checkItem.classList.contains("editions__check-item_checked")) {
        checkItem.classList.remove("editions__check-item_active");
      };
      checkItem.classList.toggle('editions__check-item_open');
    });
  });

  checkbox.forEach(function(checkbox) {
    checkbox.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path;
      document.querySelector(`[data-target="${path}"]`).classList.add('editions__check-item_active');
      document.querySelector(`[data-target="${path}"]`).classList.toggle('editions__check-item_checked');
    });
  });

  checkBtn.forEach(function(checkBtn) {
    checkBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path;
      document.querySelector(`[data-target="${path}"]`).classList.remove('editions__check-item_active');
      document.querySelector(`[data-target="${path}"]`).classList.remove('editions__check-item_checked');
      document.querySelector(`[data-path="${path}"]`).checked = false;
    });
  });
});
