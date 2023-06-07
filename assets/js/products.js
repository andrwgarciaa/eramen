let products = [
	{
		name: 'Yokohama Ramen',
		japanese_name: '横浜 ラーメン',
		price: 'Rp30.000,00',
		description:
			'This is a hearty and flavorful dish that is sure to satisfy. Yokohama Ramen is made with a rich and flavorful pork broth, chewy ramen noodles, topped with pork belly, a soft-boiled egg, and narutomaki.',
		image: '../assets/img/yokohama-ramen.png',
		category: ['spicy', 'pork', 'egg'],
	},
	{
		name: 'Yokohama Ramen',
		japanese_name: '横浜 ラーメン',
		price: 'Rp30.000,00',
		description:
			'This is a hearty and flavorful dish that is sure to satisfy. Yokohama Ramen is made with a rich and flavorful pork broth, chewy ramen noodles, topped with pork belly, a soft-boiled egg, and narutomaki.',
		image: '../assets/img/yokohama-ramen.png',
		category: ['spicy', 'pork', 'egg'],
	},
];

const menuContainer = document.querySelector('.menu-container');

products.map((i) => {
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
	menuContainer.append(productContainer);
});
