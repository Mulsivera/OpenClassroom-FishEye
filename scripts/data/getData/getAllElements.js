import { Photographer } from "../../models/Photographer.js";

export async function getAllElements(element, elementId) {
    try {
        const response = await fetch("../data/photographers.json");
        if (!response.ok) {
            throw new Error(`script/data/getData/getAllElements.js => HTTP Error : ${response.status}`);
        }
        const data = await response.json();
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