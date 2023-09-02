const cakes = [

	{ title: "Golden Wedding Cake ", price: "Rs.450/-", image: "golden wedding cake.jpg"},
	{ title: "Traditional Wedding Cake ", price: "Rs.200/-", image: "traditional wedding cake.jpg"},
	{ title: "Wedding Cake ", price: "Rs.6000/-", image: "cake31.jpg"},
	{ title: "Wedding Cake Structure 1", price: "(Contact Us for Price)", image: "structures1.jpg"},
	{ title: "Wedding Cake Structure 2", price: "(Contact Us for Price)", image: "structure2.jpg"},
	{ title: "Wedding Cake Structure 3", price: "(Contact Us for Price)", image: "structure3.jpg"},
	{ title: "Wedding Cake Structure 4", price: "(Contact Us for Price)", image: "structure4.jpg"},
	{ title: "Wedding Cake Structure 5", price: "(Contact Us for Price)", image: "structure5.jpg"},
	{ title: "Wedding Cake Structure 6", price: "(Contact Us for Price)", image: "structure6.jpg"},
	{ title: "Wedding Cake Structure 7", price: "(Contact Us for Price)", image: "structure7.jpg"},
	{ title: "Cupcakes Structure 1", price: "(Contact Us for Price)", image: "cupcakewedding1.jpg"},
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
