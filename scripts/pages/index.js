    async function getPhotographers() {
        const response = await fetch("../data/photographers.json");
        const data = await response.json();

        return data.photographers.map(data => new Photographer(data));

    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            photographersSection.appendChild(photographer.getUserCardDOM());
        });
    }

    async function init() {
        const photographers = await getPhotographers();
        displayData(photographers);
    }
    
    init();
    
