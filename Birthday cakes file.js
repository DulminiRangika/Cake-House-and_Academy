
const cakes = [
	{ title: "Birthday Cake 1", image: "cake1.jpg", Detail: "500 g", description: "1 kg", priceDetail: "Rs.2000/-", priceDescription: "Rs.3800/-" },
	{ title: "Birthday Cake 2", image: "cake2.jpg", Detail: "500 g", description: "1 kg", priceDetail: "Rs.2000/-", priceDescription: "Rs.3800/-" },
    { title: "Birthday Cake 3", image: "cake3.jpg", Detail: "500 g", description: "1 kg", priceDetail: "Rs.2400/-", priceDescription: "Rs.4500/-" },
    { title: "Birthday Cake 4", image: "cake4.jpg", Detail: "500 g", description: "1 kg", priceDetail: "Rs.2900/-", priceDescription: "Rs.5500/-" },
    { title: "Birthday Cake 5",image: "cake5.jpg", Detail: "500 g", description: "1 kg", priceDetail: "Rs.2900/-", priceDescription: "Rs.5500/-" },
    { title: "Birthday Cake 6", image: "cake6.jpg", Detail: "500 g", description: "1 kg", priceDetail: "Rs.1900/-", priceDescription: "Rs.3500/-" },
    { title: "Birthday Cake 7", image: "cake7.jpg",  Detail: "500 g", description: "1 kg", priceDetail: "Rs.2000/-", priceDescription: "Rs.3800/-" },
    { title: "Birthday Cake 8", image: "cake8.jpg",  Detail: "500 g", description: "1 kg", priceDetail: "Rs.3400/-", priceDescription: "Rs.6500/-" },
    { title: "Birthday Cake 9", image: "cake9.jpg",  Detail: "500 g", description: "1 kg", priceDetail: "Rs.2600/-", priceDescription: "Rs.5000/-" },
    { title: "Birthday Cake 10", image: "cake10.jpg",  Detail: "500 g", description: "1 kg",priceDetail: "Rs.1600/-", priceDescription: "Rs.3000/-" },
	{ title: "Birthday Cake 11", image: "cake11.jpg",  Detail: "", description: "3 kg", priceDetail: "", priceDescription: "Rs.11 500/-" },
	{ title: "Birthday Cake 12", image: "cake12.jpg",  Detail: "500 g", description: "1 kg", priceDetail: "Rs.3200/-", priceDescription: "Rs.6000/-" },
	{ title: "Birthday Cake 13", image: "cake13.jpg",  Detail: "500 g", description: "1 kg", priceDetail: "Rs.1900/-", priceDescription: "Rs.3500/-" },
	{ title: "Birthday Cake 14", image: "cake14.jpg",  Detail: "500 g", description: "1 kg", priceDetail: "Rs.2000/-", priceDescription: "Rs.3800/-" },
	{ title: "Birthday Cake 15", image: "cake15.jpg",  Detail: "500 g", description: "1 kg", priceDetail: "Rs.2600/-", priceDescription: "Rs.5000/-" },
	{ title: "Birthday Cake 16", image: "cake16.jpg",  Detail: "500 g", description: "1 kg", priceDetail: "Rs.2900/-", priceDescription: "Rs.5500/-" },
	{ title: "Birthday Cake 17", image: "cake17.jpg",  Detail: "500 g", description: "1 kg", priceDetail: "Rs.3000/-", priceDescription: "Rs.5800/-" },
	{ title: "Birthday Cake 18", image: "cake18.jpg",  Detail: "500 g", description: "1 kg", priceDetail: "Rs.2200/-", priceDescription: "Rs.4000/-" },
	{ title: "Birthday Cake 19", image: "cake32.jpg",  Detail: "500 g", description: "1 kg", priceDetail: "Rs.2900/-", priceDescription: "Rs.5500/-" },
	{ title: "Birthday Cake 20", image: "cake20.jpg",  Detail: "500 g", description: "1 kg", priceDetail: "Rs.2400/-", priceDescription: "Rs.4500/-" },
	{ title: "Birthday Cake 21", image: "cake21.jpg",  Detail: "500 g", description: "1 kg", priceDetail: "Rs.2400/-", priceDescription: "Rs.4500/-" },
	{ title: "Birthday Cake 22", image: "cake22.jpg",  Detail: "500 g", description: "1 kg", priceDetail: "Rs.1900/-", priceDescription: "Rs.3500/-" },
	{ title: "Birthday Cake 23", image: "cake23.jpg",  Detail: "500 g", description: "1 kg", priceDetail: "Rs.2200/-", priceDescription: "Rs.4000/-" },
	{ title: "Birthday Cake 24", image: "cake24.jpg",  Detail: "", description: "3 kg", priceDetail: "", priceDescription: "Rs.11 500/-" },
	{ title: "Birthday Cake 25", image: "cake25.jpg",  Detail: "500 g", description: "1 kg", priceDetail: "Rs.3000/-", priceDescription: "Rs.5800/-" },
	{ title: "Birthday Cake 26", image: "cake26.jpg",  Detail: "500 g", description: "1 kg", priceDetail: "Rs.3000/-", priceDescription: "Rs.5800/-" },
	{ title: "Birthday Cake 27", image: "cake27.jpg",  Detail: "500 g", description: "1 kg", priceDetail: "Rs.3000/-", priceDescription: "Rs.5800/-" },
	{ title: "Birthday Cake 28", image: "cake30.jpg",  Detail: "500 g", description: "1 kg", priceDetail: "Rs.3000/-", priceDescription: "Rs.5800/-" },
	{ title: "Birthday Cake 29", image: "cake29.jpg",  Detail: "500 g", description: "1 kg", priceDetail: "Rs.2900/-", priceDescription: "Rs.5500/-" },

	
  
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
	 if (cake.title !== "Birthday Cake 11" && cake.title !== "Birthday Cake 24") {
        cakeDetail.innerHTML = `${cake.Detail} Price: <span class="cake-price">${cake.priceDetail}</span>`;
    }
		
	const cakedescription = document.createElement("p");
    cakedescription.classList.add("cake-description");
    cakedescription.innerHTML = `${cake.description} Price: <span class="cake-price">${cake.priceDescription}</span>`;


    cakeCard.appendChild(cakeImage);
    cakeCard.appendChild(cakeTitle);
	 if (cake.title !== "Birthday Cake 11" && cake.title !== "Birthday Cake 24") {
        cakeCard.appendChild(cakeDetail);
    }

    cakeCard.appendChild(cakedescription);
	




    cakeContainer.appendChild(cakeCard);
});
