const adsContainer = document.querySelector('.ads-container');
const seeMoreButton = document.querySelector('.see-more');

adsContainer.addEventListener('wheel', (e) => {
	e.preventDefault();
	adsContainer.scrollLeft += e.deltaY / 2;
	adsContainer.scrollLeft += e.deltaX / 2;
});

seeMoreButton.addEventListener('click', () => {
	window.location.href = '../../pages/products.html?filter=promo';
});
