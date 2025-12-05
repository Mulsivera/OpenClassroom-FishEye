// This class represents a Video media item, extending the Media class.

import { Media } from "./Media.js";

export class Video extends Media {
    constructor(data) {
        super(data);
        this.video = data.video;
    }
}