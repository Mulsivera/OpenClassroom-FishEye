import { displayAllElements } from "../data/displayData/displayAllElements.js";
import { getPhotographerCardDOM } from "../templates/getPhotographerCardDOM.js";
import { getAllElements } from "../data/getData/getAllElements.js";

async function init() {
    const photographers = await getAllElements("photographer");
    displayAllElements(photographers,".photographer_section",(photographer) => getPhotographerCardDOM(photographer));
}

init();
