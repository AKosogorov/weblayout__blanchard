window.addEventListener('DOMContentLoaded', function() {
  const element = document.querySelector('.gallery__select');
  const choices = new Choices(element, {
    position: 'bottom',
    searchEnabled: false,
    shouldSort: false,
    itemSelectText: '',
  });
});
