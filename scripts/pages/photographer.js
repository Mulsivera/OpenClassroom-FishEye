import { getPhotographer } from "../data/getData/getPhotographer.js";
import { displayOneElement } from "../data/displayData/displayOneElement.js";
import { getPhotographerHeaderDOM } from "../templates/getPhotographerHeaderDOM.js";
import { getAllMediasFromPhotographer } from "../data/getData/getAllMediasFromPhotographer.js";
import { mediaFactory } from "../factory/mediaFactory.js";
import { getMediaCardDom } from "../templates/getMediaCardDOM.js";
import { likeManagement } from "../utils/likeManagement.js";
import { totalLikes } from "../utils/totalLikes.js";

async function init() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"), 10);

    const photographer = await getPhotographer(id);
    const media = await getAllMediasFromPhotographer(id);

    const mediaInstances = media.map((m) => mediaFactory(m)).filter(Boolean);
    mediaInstances.forEach((item) => {
    if(Image || Video){
        displayOneElement(".photograph-medias", () => getMediaCardDom(item, photographer.name))
    } else {
        console.log("Media type unknown" + item);
    }
    });

    displayOneElement(".photograph-header", () => getPhotographerHeaderDOM(photographer));
    likeManagement();
    totalLikes();
}

init();
