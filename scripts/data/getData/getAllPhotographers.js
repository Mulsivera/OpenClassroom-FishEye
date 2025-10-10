// GET all photographers from data/photographers.json

import { Photographer } from "../../models/Photographer.js";

export async function getAllPhotographers() {
    const response = await fetch("../data/photographers.json");
    const data = await response.json();

    return data.photographers.map(p => new Photographer(p));
}
