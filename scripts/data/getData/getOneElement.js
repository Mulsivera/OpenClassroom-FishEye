import { Media } from "../../models/Media.js";
import { Photographer } from "../../models/Photographer.js";

export async function getOneElement(element, elementID) {
    try {
        const response = await fetch("../data/photographers.json")
        if (!response.ok) {
            throw new Error(`script/data/getData/getOneElement.js => HTTP Error : ${response.status}`)
        }
        const data = await response.json();
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