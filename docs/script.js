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
        <main>
            <section class="section-beers">
                ${content}
            </section>
        </main>
    `
};

const beerCard = (beers) => {
    return beers.cards.map(beer => {
        const { title, sub, text, id } = beer
        return (
            `
            <article class="beer-card">
                <div class="beer-number">${id}</div>
                <div class="beer-card-inner">
                        <h3 class="title">${title}</h3>
                        <div class="beer-info">
                            <hr class="divider">
                            <p class="sub">${sub}</p>
                            <h4 class="text">${text}<h4>
                        </div>
                    </div>
                    <button class="button-details">details 
                    <span class="material-icons button-arrow">arrow_forward</span> </button>
                </div>
            </article>
            `
        )
    }).join("")
};



fetchBeers = async () => {
    const beerData = await fetch(`http://127.0.0.1:9000/data`);
    return beerData.json();
};



const loadEvent = async () => {
    const beers = await fetchBeers();
    const rootElement = document.getElementById("root");
    // const contentWrapper = document.querySelector(".content-wrapper");
    
    rootElement.insertAdjacentHTML("beforeend", pageHeader());
    rootElement.insertAdjacentHTML("beforeend", mainContentWrapper(
        beerCard(beers)
    ));
    // rootElement.insertAdjacentHTML("beforeend", mainContentWrapper());
    // rootElement.innerHTML = beerCard(beers);
};

window.addEventListener("load", loadEvent);