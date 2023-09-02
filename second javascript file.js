
const cakes = [
	{ title: "Butter Cake", image: "Butter-Cake.jpg", Detail: "500 g", description: "1 kg", priceDetail: "Rs.700/-", priceDescription: "Rs.1400/-"},
	{ title: "Butter Cake with Icing", image: "Butter Cake with Icing.jpg", Detail: "500 g", description: "1 kg", priceDetail: "Rs.800/-", priceDescription: "Rs.1600/-" },
    { title: "Chocolate Cake", image: "Chocolate-Cake.jpg", Detail: "500 g", description: "1 kg", priceDetail: "Rs.750/-", priceDescription: "Rs.1500/-" },
    { title: "Chocalate Cake with Icing", image: "Chocalate Cake with Icing.jpg", Detail: "500 g", description: "1 kg", priceDetail: "Rs.850/-", priceDescription: "Rs.1700/-" },
    { title: "Ribbon Cake",image: "Ribbon-cake.jpg", Detail: "500 g", description: "1 kg", priceDetail: "Rs.750/-", priceDescription: "Rs.1500/-" },
    { title: "Ribbon Cake with Icing", image: "Ribbon Cake with Icing.jpg", Detail: "500 g", description: "1 kg", priceDetail: "Rs.850/-", priceDescription: "Rs.1700/-" },
    { title: "Zeebra cake", image: "Zeebra-Cake.jpg",  Detail: "500 g", description: "1 kg", priceDetail: "Rs.750/-", priceDescription: "Rs.1500/-" },
    { title: "Zeebra Cake with Icing", image: "Zeebra Cake with Icing.Jpg",  Detail: "500 g", description: "1 kg", priceDetail: "Rs.850/-", priceDescription: "Rs.1700/-" },
    { title: "Marble Cake", image: "Marble-Cake.jpg",  Detail: "500 g", description: "1 kg", priceDetail: "Rs.750/-",priceDescription: "Rs.1500/-" },
    { title: "Marble Cake with Icing", image: "Marble Cake with Icing.Jpg",  Detail: "500 g", description: "1 kg",priceDetail: "Rs.850/-", priceDescription: "Rs.1700/-" },
	{ title: "Coffee cake", image: "Coffee-Cake.jpg",  Detail: "500 g", description: "1 kg", priceDetail: "Rs.800/-", priceDescription: "Rs.1600/-" },
	{ title: "Date Cake", image: "Date Cake.jpeg",  Detail: "500 g", description: "1 kg", priceDetail: "Rs.900/-", priceDescription: "Rs.1800/-" },
	{ title: "Coconut Cake", image: "Coconut-Cake.jpg",  Detail: "500 g", description: "1 kg", priceDetail: "Rs.1000/-", priceDescription: "Rs.2000/-" },
	{ title: "Fruit Cake", image: "Fruit Cake.jpg",  Detail: "500 g", description: "1 kg", priceDetail: "Rs.900/-", priceDescription: "Rs.1800/-" },
	{ title: "Red Velvet Cake", image: "Red Velvet Cake.jpg",  Detail: "500 g", description: "1 kg", priceDetail: "Rs.850/-", priceDescription: "Rs.1700/-" },
	{ title: "Gateau Cake", image: "Gateau Cake.jpg",  Detail: "500 g", description: "1 kg", priceDetail: "Rs.2000/-", priceDescription: "Rs.3000/-" },
	
  
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

	const cakeDetail = document.createElement("p");
    cakeDetail.classList.add("cake-Detail");
    cakeDetail.innerHTML = `${cake.Detail} Price: <span class="cake-price">${cake.priceDetail}</span>`;
	
	const cakedescription = document.createElement("p");
    cakedescription.classList.add("cake-description");
    cakedescription.innerHTML = `${cake.description} Price: <span class="cake-price">${cake.priceDescription}</span>`;


    cakeCard.appendChild(cakeImage);
    cakeCard.appendChild(cakeTitle);
    cakeCard.appendChild(cakeDetail);
    cakeCard.appendChild(cakedescription);
	




    cakeContainer.appendChild(cakeCard);
});
