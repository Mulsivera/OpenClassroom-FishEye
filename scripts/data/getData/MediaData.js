// This class fetches media data and can return one item or all items for a photographer.

import { Datas } from "./Datas.js";
import { Media } from "../../models/Media.js";

export class MediaData extends Datas {
    static async getOne(id) {
        const data = await Datas.getData();
        const mediaData = data.media.find(m => m.id === id);
        return mediaData ? new Media(mediaData) : null;
    }
    static async getAllFromPhotographer(id) {
        const data = await Datas.getData();
        const mediasData = data.media.filter(m => m.photographerId === id);
        return mediasData;
    }
}