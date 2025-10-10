// GET a photographer by ID from data/photographers.json

import { Photographer } from "../../models/Photographer.js";

export async function getPhotographer(photographerId) {
    try {
        const response = await fetch("../data/photographers.json");

        if(!response.ok) {
            throw new Error(`script/data/getData/getPhotographer.js => HTTP Error : ${response.status}`)
        }

        const data = await response.json();
        const photographerData = data.photographers.find(p => p.id === photographerId);

        return photographerData ? new Photographer(photographerData) : null;
    } catch (error) {
        console.error("script/data/getData/getPhotographer.js => ", error);
        return null;
    }
}