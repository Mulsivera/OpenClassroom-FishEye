// This script loads a photographer and their media, displays them on the page, and sets up interactions like likes, lightbox, filtering, and contact form.

import { displayOneElement } from "../data/displayData/displayOneElement.js";
import { getPhotographerHeaderDOM } from "../templates/getPhotographerHeaderDOM.js";
import { mediaFactory } from "../factory/mediaFactory.js";
import { getMediaCardDom } from "../templates/getMediaCardDOM.js";
import { likeManagement } from "../utils/likeManagement.js";
import { totalLikes } from "../utils/totalLikes.js";
import { displayLightBox } from "../utils/displayLightBox.js";
import { navigateLightBox } from "../utils/navigateLightBox.js";
import { filterSelector } from "../utils/filterSelector.js";
import { contactForm } from "../utils/contactForm.js";
import { PhotographerData } from "../data/getData/PhotographerData.js";
import { MediaData } from "../data/getData/MediaData.js";
import { Video } from "../models/Video.js";

async function init() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"), 10);

    const photographer = await PhotographerData.getOne(id);
    const media = await MediaData.getAllFromPhotographer(id);

    const mediaInstances = media.map((m) => mediaFactory(m)).filter(Boolean);
    mediaInstances.sort((a, b) => b.likes - a.likes);
    mediaInstances.forEach((item) => {
        if (Image || Video) {
            displayOneElement(".photograph-medias", () => getMediaCardDom(item, photographer.nameTransform));
        } else {
            console.log("Media type unknown" + item);
        }
    });

    displayOneElement(".photograph-header", () => getPhotographerHeaderDOM(photographer));
    likeManagement();
    totalLikes();
    contactForm();
    displayLightBox();
    navigateLightBox();
    filterSelector();
}

init();