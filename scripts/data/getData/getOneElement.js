import { Media } from "../../models/Media.js";
import { Photographer } from "../../models/Photographer.js";
import { getData } from "./getData.js";

export async function getOneElement(element, elementID) {
    try {
        const data = await getData();
        if (element == "photographer") {
            const photographerData = data.photographers.find(p => p.id === elementID);
            return photographerData ? new Photographer(photographerData) : null;
        }
        if (element == "media") {
            const mediaData = data.media.find(m => m.id === mediaId);
            return mediaData ? new Media(mediaData) : null;
        }
    } catch (error) {
        console.error("script/data/getData/getOneElement.js => ", error);
        return null;
    }
}