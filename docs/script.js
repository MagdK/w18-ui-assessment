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
            <section class="content-wrapper">
                ${content}
            </section>
        </main>
    `
};

const beerCard = (beers) => {
    return beers.cards.map(beer => {
        const { title, sub, text} = beer
        return (
            `
            <div class="card">
                <div>1</div>
                <h3>${title}</h3>
                <p>${sub}</p>
                <p>${text}</p>
                <button>details</button>
            </div>
            `
        )
    }).join("")
};

const mockBeers = () => {
    return `
        <main>
            <section class="section-beers">
                <article class="beer-card">
                    <div class="beer-number">1</div>
                    <div class="beer-card-inner">
                        <h3 class="title">Mango Bay</h3>
                        <hr class="divider">
                        <p class="sub">Mad Scientist Beer</p>
                        <h4 class="text">Pale Ale - American<h4>
                    </div>
                    <button>details 
                    <span class="material-icons button-arrow">arrow_forward</span> </button>
                </article>
                <article class="beer-card">
                    <div class="beer-number">2</div>
                    <div class="beer-card-inner">
                        <h3>Mango Bay</h3>
                        <p>Mad Scientist Beer</p>
                        <h4>Pale Ale - American<h4>
                    </div>
                    <button>details</button>
                </article>
                <article class="beer-card">
                    <div class="beer-number">3</div>
                    <div class="beer-card-inner">
                        <h3>Mango Bay</h3>
                        <p>Mad Scientist Beer</p>
                        <h4>Pale Ale - American<h4>
                    </div>
                    <button>details</button>
                </article>
                <article class="beer-card">
                    <div class="beer-number">4</div>
                    <div class="beer-card-inner">
                        <h3>Mango Bay</h3>
                        <p>Mad Scientist Beer</p>
                        <h4>Pale Ale - American<h4>
                    </div>
                    <button>details</button>
                </article>
                <article class="beer-card">
                    <div class="beer-number">5</div>
                    <div class="beer-card-inner">
                        <h3>Mango Bay</h3>
                        <p>Mad Scientist Beer</p>
                        <h4>Pale Ale - American<h4>
                    </div>
                    <button>details</button>
                </article>
            </section>
        </main>
    `
}


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