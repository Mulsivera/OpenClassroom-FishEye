    async function getPhotographer(id) {
        const response = await fetch("../data/photographers.json");
        const data = await response.json();

        const photographerData = data.photographers.find(p => p.id === id);
        return photographerData ? new Photographer(photographerData) : null;
    }

    async function getMedias(id_photographer) {
        const response = await fetch("../data/photographers.json");
        const data = await response.json();

        const mediasData = data.media.filter(m => m.photographerId === id_photographer);
        return mediasData.map(data => new Media(data));
    }

    async function displayData(photographer, media) {
        const photographerHeader = document.querySelector(".photograph-header");
        photographerHeader.appendChild(photographer.getUserHeaderDom());
        const mediasSection = document.querySelector(".photograph-medias");
        media.forEach((m) => {
            mediasSection.appendChild(m.getMediaCardDom());
        });
        }

    async function init() {
        const params = new URLSearchParams(window.location.search);
        const id = parseInt(params.get("id"), 10);

        const photographer = await getPhotographer(id);
        const media = await getMedias(id);
        displayData(photographer, media);
    }

    init();
