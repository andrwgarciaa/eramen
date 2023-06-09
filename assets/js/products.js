let products = [
	{
		type: 'ramen',
		name: 'Yokohama Ramen',
		japanese_name: '横浜ラーメン',
		price: 'Rp30.000,00',
		description:
			'A hearty and flavorful dish that is sure to satisfy. Yokohama Ramen is made with a rich and flavorful pork broth, chewy ramen noodles, topped with pork belly, a soft-boiled egg, and narutomaki.',
		image: '../assets/img/yokohama-ramen.png',
		category: ['spicy', 'pork', 'egg'],
	},
	{
		type: 'ramen',
		name: 'Nagasaki Ramen',
		japanese_name: '長崎ラーメン',
		price: 'Rp36.000,00',
		description:
			'Traditional Japanese tonkatsu broth simmered to perfection for hours, boasts a creamy texture and a depth of flavors topped with succulent slices of tender pork and a medley of sautéed mushrooms.',
		image: '../assets/img/nagasaki-ramen.png',
		category: ['pork', 'mushroom'],
	},
	{
		type: 'ramen',
		name: 'Akashi Ramen',
		japanese_name: '証ラーメン',
		price: 'Rp40.800,00',
		description:
			"Topped with perfectly boiled eggs, succulent shrimps, and vibrant edamame, this harmonious blend of flavors offers a tantalizing journey through the vibrant and diverse world of Kyoto's ramen scene.",
		image: '../assets/img/akashi-ramen.png',
		category: ['shrimp', 'egg'],
		onPromo: true,
		promoPercentage: 15,
		originalPrice: 'Rp48.000,00',
	},
	{
		type: 'ramen',
		name: 'Butadango Ramen',
		japanese_name: '豚団子ラーメン',
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
		type: 'ramen',
		name: 'Niwatori Ramen',
		japanese_name: '鶏ラーメン',
		price: 'Rp37.750,00',
		description:
			'Tender chicken, paired with the sweetness of corn and the creamy goodness of a perfectly boiled egg, creates a comforting and satisfying bowl of ramen that will leave you craving for more.',
		image: '../assets/img/niwatori-ramen.png',
		category: ['chicken', 'egg'],
		onPromo: true,
		promoPercentage: 10,
		originalPrice: 'Rp42.000,00',
	},
	{
		type: 'ramen',
		name: 'Kamaboko Ramen',
		japanese_name: '蒲鉾ラーメン',
		price: 'Rp37.600,00',
		description:
			"With its combination of tender noodles and the subtle umami flavors of kamaboko, this bowl of ramen offers a unique and satisfying culinary experience that will transport you to the heart of Japan's rich seafood traditions.",
		image: '../assets/img/kamaboko-ramen.png',
		category: ['spicy', 'fish'],
		onPromo: true,
		promoPercentage: 20,
		originalPrice: 'Rp47.000,00',
	},
	{
		type: 'ramen',
		name: 'Spicy Miso Ramen',
		japanese_name: '辛味噌ラーメン',
		price: 'Rp38.700,00',
		description:
			'Topped with a delightful medley of carefully selected ingredients, this bowl offers a harmonious fusion of flavors that will ignite your taste buds and satisfy your craving for a fiery and comforting ramen experience.',
		image: '../assets/img/spicy-miso-ramen.png',
		category: ['spicy', 'chicken', 'egg'],
		onPromo: true,
		promoPercentage: 10,
		originalPrice: 'Rp43.000,00',
	},
	{
		type: 'side dish',
		name: 'Prawn Sushi',
		japanese_name: 'エビ寿司',
		price: 'Rp40.000,00',
		description:
			'Delicious prawn sushi made with fresh, plump prawns that have been cooked to perfection. Each bite is a perfect combination of sweet, savory, and fresh flavors.',
		image: '../assets/img/prawn-sushi.png',
		category: ['shrimp'],
	},
	{
		type: 'side dish',
		name: 'Chicken Karaage',
		japanese_name: '鶏の唐揚げ',
		price: 'Rp30.000,00',
		description:
			'Bite into succulent, marinated chicken pieces enveloped in a golden, crunchy coating, revealing tender and juicy meat that bursts with flavor.',
		image: '../assets/img/chicken-karaage.png',
		category: ['chicken'],
	},
	{
		type: 'beverages',
		name: 'Matcha Tea',
		japanese_name: '抹茶',
		price: 'Rp15.000,00',
		description:
			'Sip slowly and savor the earthy notes and subtle sweetness, as the finely ground green tea leaves whisked to perfection offer a moment of tranquility and a rejuvenating taste of traditional Japanese tea culture.',
		image: '../assets/img/matcha-tea.png',
		category: [],
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
const sideDishesButton = document.querySelector('.side-dishes-button');
const beveragesButton = document.querySelector('.beverages-button');

const removeOldProducts = () => {
	let oldItems = document.querySelectorAll('.product-container');
	oldItems.forEach((i) => i.remove());
};

const removeActives = () => {
	allFilterButton.forEach((i) => {
		if (i.classList.contains('filter-active'))
			i.classList.remove('filter-active');
	});
};

const showProducts = (items) => {
	removeOldProducts();
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
		removeActives();
		allMenuButton.classList.add('filter-active');
	});
};

const showPromo = () => {
	removeOldProducts();
	let promoItems = products.filter((i) => {
		return i.onPromo;
	});
	promoItems.sort((a, b) => -(a.promoPercentage - b.promoPercentage));

	showProducts(promoItems);
	removeActives();
	promoButton.classList.add('filter-active');
};

const showRamen = () => {
	removeOldProducts();
	let ramenItems = products.filter((i) => {
		return i.type === 'ramen';
	});
	showProducts(ramenItems);
	removeActives();
	ramenButton.classList.add('filter-active');
};

const showSideDishes = () => {
	removeOldProducts();
	let sideDishes = products.filter((i) => {
		return i.type === 'side dish';
	});
	showProducts(sideDishes);
	removeActives();
	sideDishesButton.classList.add('filter-active');
};

const showBeverages = () => {
	removeOldProducts();
	let beverages = products.filter((i) => {
		return i.type === 'beverages';
	});
	showProducts(beverages);
	removeActives();
	beveragesButton.classList.add('filter-active');
};

const checkPromoRedirect = () => {
	const urlParams = new URLSearchParams(window.location.search);
	if (urlParams.get('filter') === 'promo') {
		return true;
	}
};

document.addEventListener('DOMContentLoaded', () => {
	if (checkPromoRedirect()) {
		showPromo();
	} else showProducts(products);
});

allMenuButton.addEventListener('click', () => showProducts(products));
promoButton.addEventListener('click', showPromo);
ramenButton.addEventListener('click', showRamen);
sideDishesButton.addEventListener('click', showSideDishes);
beveragesButton.addEventListener('click', showBeverages);
