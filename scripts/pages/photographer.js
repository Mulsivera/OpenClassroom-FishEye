    async function getPhotographer(id) {
        const response = await fetch("../data/photographers.json");
        const data = await response.json();

        const photographerData = data.photographers.find(p => p.id === id);
        return photographerData ? new Photographer(photographerData) : null;
    }

    async function displayData(photographer) {
        const photographerHeader = document.querySelector(".photograph-header");
        photographerHeader.appendChild(photographer.getUserHeaderDom());
        }

    async function init() {
        const params = new URLSearchParams(window.location.search);
        const id = parseInt(params.get("id"), 10);

        const photographer = await getPhotographer(id);
        displayData(photographer);
    }

    init();
