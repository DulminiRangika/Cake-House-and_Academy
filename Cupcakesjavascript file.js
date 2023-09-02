const cakes = [

	{ title: "Vanila Cupcake", price: "Rs.100/-", image: "Vanila Cupcake.jpg"},
	{ title: "Chocolate Cupcake", price: "Rs.120/-", image: "Chocolate Cupcake.jpg"},
	{ title: "Coffee Cupcake", price: "Rs.130/-", image: "Coffee Cupcake.jpg"},
	{ title: "Marble Cupcake", price: "Rs.120/-", image: "Marble Cupcake.jpg"},
	{ title: "Red Velvet Cupcake", price: "Rs.150/-", image: "Red Velvet Cupcake.jpg"},
	{ title: "Zeebra Cupcake", price: "Rs.120/-", image: "Zeebra Cupcake.JPG"},
	{ title: "Fruit Cupcakes", price: "Rs.150/-", image: "Fruit Cupcakes.jpg"},
	{ title: "Muffins", price: "Rs.70/-", image: "Muffins.jpg"},
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
