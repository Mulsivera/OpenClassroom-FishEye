import { Photographer } from "../../models/Photographer.js";
import { getData } from "./getData.js";

export async function getAllElements(element, elementId) {
    try {
        const data = await getData();
        if (element == "photographer") {
            return data.photographers.map(p => new Photographer(p));
        }
        if (element == "media") {
            const mediasData = data.media.filter(m => m.photographerId === elementId);
            return mediasData;
        }
    } catch (error) {
        console.error("script/data/getData/getAllElements.js => ", error);
        return null;
    }
}