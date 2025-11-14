import { getPhotographer } from "../data/getData/getPhotographer.js";
import { getAllMediasFromPhotographer } from "../data/getData/getAllMediasFromPhotographer.js";
import { mediaFactory } from "../factory/mediaFactory.js";
import { displayOneElement } from "../data/displayData/displayOneElement.js";
import { getMediaCardDom } from "../templates/getMediaCardDOM.js";

export async function getFilteredMedias(filterId) {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"), 10);
    const photographer = await getPhotographer(id);
    const media = await getAllMediasFromPhotographer(id);

    const mediaInstances = media.map(m => mediaFactory(m)).filter(Boolean);

    if (filterId === "popularity") {
        mediaInstances.sort((a, b) => b.likes - a.likes);
    } else if (filterId === "date") {
        mediaInstances.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (filterId === "title") {
        mediaInstances.sort((a, b) => a.title.localeCompare(b.title));
    }

    const container = document.querySelector(".photograph-medias");
    container.innerHTML = "";

    mediaInstances.forEach(item => {
        if (item.image || item.video) {
            displayOneElement(".photograph-medias", () => getMediaCardDom(item, photographer.name));
        }
    });
}