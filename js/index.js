const elHeader = document.querySelector('.site-header');
const elToggler = elHeader.querySelector('.js-toggler');

elToggler.addEventListener('click', function () {
elHeader.classList.toggle('site-header--active');
})