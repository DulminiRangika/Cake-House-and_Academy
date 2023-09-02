const cakes = [

	{ title: "Chocolate Brownies", price: "(Contact Us for Price)", image: "brownies.jpg"},
	{ title: "Vanila Brownies", price: "(Contact Us for Price)", image: "vanillabrownies.jpg"},
	{ title: "Marble Brownies", price: "(Contact Us for Price)", image: "marble brownies.jpg"},
	{ title: "Red Velvet Brownies", price: "(Contact Us for Price)", image: "Red-Velvet-Brownies.jpg"},
	{ title: "Coffee Brownies", price: "(Contact Us for Price)", image: "coffee-brownies.jpg"},
	{ title: "Jar Cake", price: "(Contact Us for Price)", image: "jarcake.jpg"},
	{ title: "Cakesicles", price: "(Contact Us for Price)", image: "Cakesicles.jpg"},
	{ title: "Cakesicles", price: "(Contact Us for Price)", image: "Cakesicles1.jpg"},
	{ title: "Cake pops", price: "(Contact Us for Price)", image: "Cake pops.jpg"},
	{ title: "Cake pops", price: "(Contact Us for Price)", image: "Cake pops1.jpg"},
	{ title: "Donuts", price: "(Contact Us for Price)", image: "Donuts.jpg"},


    // Add more cake items here
];

const cakeContainer = document.getElementById("cake-container");

cakes.forEach(cake => {
    const cakeCard = document.createElement("div");
    cakeCard.classList.add("cake-card");

    const cakeImage = document.createElement("img");
    cakeImage.src = `images/${cake.image}`;
    cakeImage.alt = cake.title;
    cakeImage.classList.add("cake-image");

    const cakeTitle = document.createElement("h2");
    cakeTitle.classList.add("cake-title");
    cakeTitle.textContent = cake.title;

    const cakePrice = document.createElement("p");
    cakePrice.classList.add("cake-price");
    cakePrice.textContent = cake.price;

    cakeCard.appendChild(cakeImage);
    cakeCard.appendChild(cakeTitle);
    cakeCard.appendChild(cakePrice);

    cakeContainer.appendChild(cakeCard);
});
