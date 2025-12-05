// This script fetches all photographers and displays them on the page using their card templates.

import { displayAllElements } from "../data/displayData/displayAllElements.js";
import { getPhotographerCardDOM } from "../templates/getPhotographerCardDOM.js";
import { PhotographerData } from "../data/getData/PhotographerData.js";

async function init() {
    const photographers = await PhotographerData.getAll();
    displayAllElements(photographers,".photographer_section",(photographer) => getPhotographerCardDOM(photographer));
}

init();