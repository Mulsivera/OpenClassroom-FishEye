import { displayAllElements } from "../data/displayData/displayAllElements.js";
import { getPhotographerCardDOM } from "../templates/getPhotographerCardDOM.js";
import { PhotographerData } from "../models/PhotographerData.js";

async function init() {
    const photographers = await PhotographerData.getAll();
    displayAllElements(photographers,".photographer_section",(photographer) => getPhotographerCardDOM(photographer));
}

init();
