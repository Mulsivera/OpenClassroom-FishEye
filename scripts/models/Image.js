import { Media } from "./Media.js";

export class Image extends Media {
    constructor(data) {
        super(data);
        this.image = data.image
    }
}