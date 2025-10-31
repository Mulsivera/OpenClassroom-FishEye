// GET a media by ID from data/photographers.json

import { Media } from "../../models/Media.js";

export async function getMedia(mediaId) {
    try {
        const response = await fetch("../data/photographers.json");

        if(!response.ok) {
            throw new Error(`script/data/getData/getMedia.js => HTTP Error : ${response.status}`)
        }

        const data = await response.json();
        const mediaData = data.media.find(m => m.id === mediaId);

        return mediaData ? new Media(mediaData) : null;
    } catch (error) {
        console.error("script/data/getData/getMedia.js => ", error);
        return null;
    }
}