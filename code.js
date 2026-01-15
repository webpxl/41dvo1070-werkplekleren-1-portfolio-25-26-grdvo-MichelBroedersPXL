const projecten = [
    {
        hoofdAfbeelding: "./assets/tekenfoto1.jpg",
        primaireInfo: {
            titel: "Knik",
            beschrijving: `Enkele jaren geleden heb ik een Instagram-accountje (<a id="knik-link" href="https://www.instagram.com/knik.knak.knik/" target="_blank">@knik.knak.knik</a>
) gemaakt waarop ik af en toe tekeningen op deel die ik maak.`,
            keywords: ["Pen en papier", "Creatief", "Abstract"]
        },
        secundaireInfo: [{
            afbeelding: "./assets/tekenfoto2.png",
            beschrijving: "Het logo ontwierp ik zelf. In het begin was ik van plan hier vooral tattoo designs op te posten en wat branding te doen maar het is meer uitgegroeid tot een vrij tekenaccount."
        }, {
            afbeelding: "./assets/tekenfoto3.jpg",
            beschrijving: "Ik teken eigenlijk enkel abstract. Ik heb het altijd al interessant gevonden om lijnen en figuren te tekenen die eigenlijk niet bestaan maar je herkent er toch elementen in. Vaak lijken mijn tekeningen op iets organisch, iets natuurlijk."
        }]
    },
    {
        hoofdAfbeelding: "./assets/takeawaysite1.png",
        primaireInfo: {
            titel: "Michel's Takeaway",
            beschrijving: "Voor het vak scripting kreeg ik de opdracht een eenvoudige functionele takeaway website te maken. Het einddoel hield in dat we een visueel aantrekkelijk menu lieten inladen uit een aangeleverd menu. Ook moesten we werkende filters programmeren (zoals een prijsfilter, filteren op vegitarische items, ...) en een werkende winkelmand aanmaken.",
            keywords: ["Webdesign", "HTML, CSS, JS"]
        },
        secundaireInfo: [{
            afbeelding: "./assets/takeawaysite2.png",
            beschrijving: "Hier zie je een voorbeeld van hoe een gevulde winkelmand er kan uit zien. De geselecteerde gerechten en drankjes worden bijgehouden in local storage zodat als de pagina herladen wordt de winkelmand wordt behouden."
        }, {
            afbeelding: "./assets/takeawaysite3.png",
            beschrijving: "Dit is hoe de menu informatie werd aangeleverd. Je ziet dus een array in JavaScript met daarin alle menu-items en hun bijbehorende info."
        }]
    },
    {
        hoofdAfbeelding: "./assets/navibeat1.png",
        primaireInfo: {
            titel: "NaviBeat",
            beschrijving: "Net als Michel's Takeaway was NaviBeat een schoolproject. Het was een UI-groepswerk waarbij we een origineel concept voor een site of applicatie moesten bedenken en het idee visualiseren in Figma.",
            keywords: ["UI Design", "Figma", "Groepswerk"]
        },
        secundaireInfo: [{
            afbeelding: "./assets/navibeat2.png",
            beschrijving: "Ons idee was een app waarin je routeplanning en muziek in één app combineert. Zo kan je tijdens het navigeren naar je bestemming meteen naar je favoriete muziek luisteren zonder te moeten wisselen tussen apps. Ook hadden we nagedacht over enkele features die uniek zouden zijn aan onze app."
        }, {
            afbeelding: "./assets/navibeat3.png",
            beschrijving: "Om ons idee tot leven te brengen ondernamen we stappen zoals schetsen, wireframing en het maken van een moodboard om zo tot een finaal design te komen."
        }]
    },


]

// Horizontale scroll voor de projectencontainer
const projectenContainer = document.querySelector('#projecten-container');

projectenContainer.addEventListener('wheel', (e) => {
    e.preventDefault();
    projectenContainer.scrollLeft += e.deltaY;
}, {passive: false}); // Add this option

// Verticale scroll voorkomen wanneer je over de de gitaarvideo's scrolt
const scrollContainer = document.getElementById('recreatie-gitaar-scroller');

scrollContainer.addEventListener('wheel', (event) => {
    event.preventDefault();
    scrollContainer.scrollLeft += event.deltaY;
}, {passive: false});


const projectCardTemplate = document.querySelector("#project-card-template");

for (let i = 0; i < projecten.length; i++) {
    const clone = projectCardTemplate.content.cloneNode(true);
    const projectElement = clone.querySelector("div.project");
    clone.querySelector("div.project h3").textContent = projecten[i].primaireInfo.titel;

    if (i === 0) {
        projectElement.classList.add('eerste-project'); // Add class to the first project
    } else if (i === projecten.length - 1) {
        projectElement.classList.add('laatste-project'); // Add class to the last project
    }

    projectElement.style.backgroundImage = `url(${projecten[i].hoofdAfbeelding})`;
    projectenContainer.appendChild(clone);
}


const projectModalTemplate = document.querySelector("#project-modal-template");


function projectModalMaken(project) {
    const clone = projectModalTemplate.content.cloneNode(true);

    // hoofdafbeelding
    clone.querySelector(".project-foto").style.backgroundImage = `url(${project.hoofdAfbeelding})`;


    //primaire info
    clone.querySelector(".project-titel").textContent = project.primaireInfo.titel;
    clone.querySelector(".project-beschrijving").innerHTML = project.primaireInfo.beschrijving;
    const projectKeywords = clone.querySelector(".project-keywords");
    project.primaireInfo.keywords.forEach((keyword) => {
        const p = document.createElement("p");
        p.textContent = keyword;
        projectKeywords.appendChild(p);

    })


    //secundaire info
    const eersteFoto = clone.querySelector(".project-info-links-eerste-foto");
    eersteFoto.src = project.secundaireInfo[0].afbeelding;
    eersteFoto.alt = "Project afbeelding 1";
    const tweedeFoto = clone.querySelector(".project-info-links-tweede-foto");
    tweedeFoto.src = project.secundaireInfo[1].afbeelding;
    tweedeFoto.alt = "Project afbeelding 2";

    clone.querySelector(".project-info-links-eerste-p").textContent = project.secundaireInfo[0].beschrijving;
    clone.querySelector(".project-info-links-tweede-p").textContent = project.secundaireInfo[1].beschrijving;


    projectenContainer.appendChild(clone);

}

for (let i = 0; i < projecten.length; i++) {
    projectModalMaken(projecten[i]);
}

// Get all project cards and modals
const projectCards = document.querySelectorAll('.project');
const projectModals = document.querySelectorAll('.project-modal');

// Add click listeners to each project card
projectCards.forEach((card, index) => {
    card.addEventListener('click', () => {
        // Show the corresponding modal
        projectModals[index].classList.remove('hidden');
    });
});

// Add click listeners to close buttons
const closeButtons = document.querySelectorAll('.modal-kruisje');
closeButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        projectModals[index].classList.add('hidden');
    });
});




