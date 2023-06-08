let products = [
	{
		type: 'ramen',
		name: 'Yokohama Ramen',
		japanese_name: '横浜 ラーメン',
		price: 'Rp30.000,00',
		description:
			'A hearty and flavorful dish that is sure to satisfy. Yokohama Ramen is made with a rich and flavorful pork broth, chewy ramen noodles, topped with pork belly, a soft-boiled egg, and narutomaki.',
		image: '../assets/img/yokohama-ramen.png',
		category: ['spicy', 'pork', 'egg'],
	},
	{
		type: 'ramen',
		name: 'Nagasaki Ramen',
		japanese_name: '長崎 ラーメン',
		price: 'Rp36.000,00',
		description:
			'Traditional Japanese tonkatsu broth simmered to perfection for hours, boasts a creamy texture and a depth of flavors topped with succulent slices of tender pork and a medley of sautéed mushrooms.',
		image: '../assets/img/nagasaki-ramen.png',
		category: ['pork', 'mushroom'],
	},
	{
		type: 'ramen',
		name: 'Akashi Ramen',
		japanese_name: '証 ラーメン',
		price: 'Rp40.800,00',
		description:
			"Topped with perfectly boiled eggs, succulent shrimps, and vibrant edamame, this harmonious blend of flavors offers a tantalizing journey through the vibrant and diverse world of Kyoto's ramen scene.",
		image: '../assets/img/akashi-ramen.png',
		category: ['egg', 'shrimp'],
		onPromo: true,
		promoPercentage: 15,
		originalPrice: 'Rp48.000,00',
	},
	{
		type: 'ramen',
		name: 'Butadango Ramen',
		japanese_name: '豚 団子ラーメン',
		price: 'Rp41.650,00',
		description:
			'Savor the irresistible delight of Butadango Ramen, where tender slices of succulent pork belly intertwine with velvety noodles in a rich, aromatic broth, creating a symphony of flavors that will leave you craving for more.',
		image: '../assets/img/butadango-ramen.png',
		category: ['pork'],
		onPromo: true,
		promoPercentage: 15,
		originalPrice: 'Rp49.000,00',
	},
	{
		type: 'side dish',
		name: 'Prawn Sushi',
		japanese_name: 'エビ寿司',
		price: 'Rp40.000,00',
		description:
			'Delicious prawn sushi made with fresh, plump prawns that have been cooked to perfection. Each bite is a perfect combination of sweet, savory, and fresh flavors.',
		image: '../assets/img/prawn-sushi.png',
		category: []
	},
];

products.sort((a, b) =>
	a.name.toLowerCase().localeCompare(b.name.toLowerCase())
);

const menuContainer = document.querySelector('.menu-container');
const allFilterButton = document.querySelectorAll('.filter-button');
const allMenuButton = document.querySelector('.all-menu-button');
const promoButton = document.querySelector('.promo-button');
const ramenButton = document.querySelector('.ramen-button');

const removeActives = () => {
	allFilterButton.forEach((i) => {
		if (i.classList.contains('filter-active'))
			i.classList.remove('filter-active');
	});
};

allMenuButton.addEventListener('click', () => {
	let oldItems = document.querySelectorAll('.product-container');
	oldItems.forEach((i) => i.remove());
	showProducts(products);
	removeActives();
	allMenuButton.classList.add('filter-active');
});

promoButton.addEventListener('click', () => {
	let oldItems = document.querySelectorAll('.product-container');
	oldItems.forEach((i) => i.remove());
	let promoItems = products.filter((i) => {
		return i.onPromo;
	});
	showProducts(promoItems);
	removeActives();
	promoButton.classList.add('filter-active');
});

ramenButton.addEventListener('click', () => {
	let oldItems = document.querySelectorAll('.product-container');
	oldItems.forEach((i) => i.remove());
	let ramenItems = products.filter((i) => {
		return i.type === 'ramen';
	});
	showProducts(ramenItems);
	removeActives();
	ramenButton.classList.add('filter-active');
});

const showProducts = (items) =>
	items.map((i) => {
		const productContainer = document.createElement('div');
		productContainer.classList.add('product-container');

		const productDetail = document.createElement('div');
		productDetail.classList.add('product-detail');

		const img = document.createElement('img');
		img.classList.add('product-img');
		img.src = i.image;

		const name = document.createElement('p');
		name.classList.add('product-name');
		name.innerHTML = i.name;

		const japaneseName = document.createElement('p');
		japaneseName.classList.add('product-japanese-name');
		japaneseName.innerHTML = i.japanese_name + '<br/><br/>';

		const description = document.createElement('p');
		description.classList.add('product-description');
		description.innerHTML = i.description + '<br/><br/>';

		const category = document.createElement('div');
		category.classList.add('product-category');
		i.category.map((i) => {
			const categoryImg = document.createElement('img');
			categoryImg.src = `../assets/img/${i}.png`;
			category.append(categoryImg);
		});

		const price = document.createElement('p');
		price.classList.add('product-price');
		price.innerHTML = i.price;

		productDetail.append(name, japaneseName, description, category, price);
		productContainer.append(img, productDetail);
		if (i.onPromo) {
			const promoBanner = document.createElement('div');
			promoBanner.classList.add('product-promo');
			const promoPercentage = document.createElement('p');
			promoPercentage.classList.add('promo-percentage');
			const promoPrice = document.createElement('p');
			promoPrice.classList.add('promo-price');

			promoPercentage.innerHTML = `${i.promoPercentage}% off`;
			promoPrice.innerHTML = `<span>from</span> ${i.originalPrice}!`;

			promoBanner.append(promoPercentage, promoPrice);
			productContainer.append(promoBanner);
		}
		menuContainer.append(productContainer);
	});

document.addEventListener('load', showProducts(products));
