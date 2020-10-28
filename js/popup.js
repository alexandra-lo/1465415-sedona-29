let popup = document.querySelector('.modal');
let button = document.querySelector('.hotel-search-btn');

popup.classList.add('modal-close');
button.addEventListener('click', function(evt) {
  evt.preventDefault();
  popup.classList.toggle('modal-close');
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (!popup.classList.contains("modal-close")) {
      evt.preventDefault();
      popup.classList.add("modal-close");
    }
  }
});
