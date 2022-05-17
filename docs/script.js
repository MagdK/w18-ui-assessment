const beers = {
	id: "beers",
	logo: "Best Beers",
	button: "details",
	cards: [
		{
			title: "Mango Bay",
			sub: "Mad Scientist Beer",
			text: "Pale Ale - American"
		},
		{
			title: "Távoli Galaxis",
			sub: "Rothbeer Brewery",
			text: "IPA - American"
		},
		{
			title: "Flying Rabbit AIPA",
			sub: "MONYO Brewing Co.",
			text: "IPA - American"
		},
		{
			title: "Liquid Cocaine",
			sub: "Mad Scientist Beer",
			text: "IPA - Imperial"
		},
		{
			title: "Organic Chocolate Stout",
			sub: "Samuel Smith Old Brewery",
			text: "Stout - English"
		},
		{
			title: "Bracia",
			sub: "Thornbridge Brewery",
			text: "Strong Ale - English"
		},
		{
			title: "Oatmeal Stout",
			sub: "Samuel Smith Old Brewery",
			text: "Stout - Oatmeal"
		},
		{
			title: "Black Tokyo Horizon",
			sub: "BrewDog",
			text: "Stout - American Imperial"
		},
		{
			title: "Vintage Ale",
			sub: "Fuller's",
			text: "Old Ale"
		},
		{
			title: "All the Leaves are Brown",
			sub: "Tempest Brewing Company",
			text: "Brown Ale - American"
		},
	]
}

const pageHeader = () => {
    return `
        <header class="header">
            <h2 class="header-logo">Best Beers</h2>
            <span class="material-symbols-outlined header-menu">menu</span>
        </header>
    `
};

function mainContentWrapper(content) {
    return `
        <main class="main">
            <section class="section-beers">
             ${content}
            </section>
        </main>
    `
};


const beerCard = (beers) => {
    return beers.cards.map((beer, index) => {
        const { title, sub, text } = beer
        return (
            `
            <article class="beer-card">
                <div class="beer-number">${index + 1}</div>
                <div class="beer-card-inner">
                        <h3 class="title">${title}</h3>
                        <div class="beer-info">
                            <hr class="divider">
                            <p class="sub">${sub}</p>
                            <h4 class="text">${text}<h4>
                        </div>
                    </div>
                    <button class="button-details">
                    <span class="button-text">details</span> 
                    <span class="material-icons button-icon">arrow_forward</button>
                </div>
            </article>
            `
            )
        }).join("")
};




const loadEvent = () => {
    const rootElement = document.getElementById("root");
    
    rootElement.insertAdjacentHTML("beforeend", pageHeader());
    rootElement.insertAdjacentHTML("beforeend", mainContentWrapper(
        beerCard(beers)
    ));
};

window.addEventListener("load", loadEvent);