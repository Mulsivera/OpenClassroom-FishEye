// This class represents an Image media item, extending the Media class.

import { Media } from "./Media.js";

export class Image extends Media {
    constructor(data) {
        super(data);
        this.image = data.image;
    }
}