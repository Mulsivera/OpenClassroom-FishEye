import { getAllPhotographers } from "../data/getData/getAllPhotographers.js";
import { displayAllElements } from "../data/displayData/displayAllElements.js";
import { getPhotographerCardDOM } from "../templates/getPhotographerCardDOM.js";

async function init() {
    const photographers = await getAllPhotographers();
    displayAllElements(photographers, ".photographer_section", function() {
        return getPhotographerCardDOM(this);
    });
}

init();
