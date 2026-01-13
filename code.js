const projecten = [
    {
        hoofdAfbeelding: "./assets/land-o-lakes-inc-o8gGuhfjB2M-unsplash.jpg",
        primaireInfo: {titel: "Project 1", beschrijving: "", keywords: ["", ""]},
        secundaireInfo: [
            {afbeelding: "", beschrijving: ""},
            {afbeelding: "", beschrijving: ""}
        ]
    },

    {
        hoofdAfbeelding: "./assets/land-o-lakes-inc-yPBP2u24rMs-unsplash.jpg",
        primaireInfo: {titel: "Project 2", beschrijving: "", keywords: ["", ""]},
        secundaireInfo: [
            {afbeelding: "", beschrijving: ""},
            {afbeelding: "", beschrijving: ""}
        ]
    },

    {
        hoofdAfbeelding: "./assets/peter-herrmann-1__n2B24HB8-unsplash.jpg",
        primaireInfo: {titel: "Project 3", beschrijving: "", keywords: ["", ""]},
        secundaireInfo: [
            {afbeelding: "", beschrijving: ""},
            {afbeelding: "", beschrijving: ""}
        ]
    }

]
const projectenContainer = document.querySelector('#projecten-container');

projectenContainer.addEventListener('wheel', (e) => {
    e.preventDefault();
    projectenContainer.scrollLeft += e.deltaY;
});


const projectCardTemplate = document.querySelector("#project-card-template");

for (let i = 0; i < projecten.length; i++) {
    const clone = projectCardTemplate.content.cloneNode(true);
    const projectElement = clone.querySelector("div.project");

    if (i === 0) {
        projectElement.classList.add('eerste-project'); // Add class to the first project
    } else if (i === projecten.length - 1) {
        projectElement.classList.add('laatste-project'); // Add class to the last project
    }

    projectElement.style.backgroundImage = `url(${projecten[i].hoofdAfbeelding})`;
    projectenContainer.appendChild(clone);
}


