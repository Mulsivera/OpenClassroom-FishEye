import { Datas } from "./Datas.js";
import { Photographer } from "../../models/Photographer.js";

export class PhotographerData extends Datas {
    static async getOne(id) {
        const data = await Datas.getData();
        const photographerData = data.photographers.find(p => p.id === id);
        return photographerData ? new Photographer(photographerData) : null;
    }
    static async getAll() {
        const data = await Datas.getData();
        return data.photographers.map(p => new Photographer(p));
    }
}