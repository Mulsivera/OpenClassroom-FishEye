// This function creates a media object as either an Image or a Video, based on the data.

import { Image } from "../models/Image.js";
import { Video } from "../models/Video.js";

export function mediaFactory(media) {
    try {
        if (media.image) {
            return new Image(media);
        }

        if (media.video) {
            return new Video(media);
        }
    } catch (error) {
        console.error("/scripts/data/factory/mediaFactory =>", error.message);
        return null;
    }
}