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

        throw new Error(
            `/scripts/data/factory/mediaFactory => media type non reconnu : ${JSON.stringify(media)}`
        );
    } catch (error) {
        console.error("/scripts/data/factory/mediaFactory =>", error.message);
        return null;
    }
}
