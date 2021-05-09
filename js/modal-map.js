var btnMap = document.querySelector('.btn-show-map');
var popupMap = document.querySelector('.modal-map');
var close = popupMap.querySelector('.modal-close');

btnMap.addEventListener('click', function (evt) {
	evt.preventDefault();
	popupMap.classList.add('modal-show');
});

close.addEventListener('click', function (evt) {
	evt.preventDefault();
	popupMap.classList.remove('modal-show');
});
