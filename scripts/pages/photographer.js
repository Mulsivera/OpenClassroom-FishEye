import { getPhotographer } from "../data/getData/getPhotographer.js";
import { displayOneElement } from "../data/displayData/displayOneElement.js";
import { getPhotographerHeaderDOM } from "../templates/getPhotographerHeaderDOM.js";
import { getAllMediasFromPhotographer } from "../data/getData/getAllMediasFromPhotographer.js";
import { displayAllElements } from "../data/displayData/displayAllElements.js";
import { getMediaCardDom } from "../templates/getMediaCardDOM.js";

async function init() {
        const params = new URLSearchParams(window.location.search);
        const id = parseInt(params.get("id"), 10);

        const photographer = await getPhotographer(id);
        const media = await getAllMediasFromPhotographer(id);
        displayOneElement(".photograph-header", () => getPhotographerHeaderDOM(photographer));
        displayAllElements(media, ".photograph-medias", (m) => getMediaCardDom(m));
    }

    init();
