const adsContainer = document.querySelector('.ads-container');

adsContainer.addEventListener('wheel', (e) => {
	e.preventDefault();
	adsContainer.scrollLeft += e.deltaY / 2;
	console.log(e.deltaY);
});
