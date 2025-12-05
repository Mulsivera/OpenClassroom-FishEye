// This function handles the media filter dropdown: opens it, applies the selected filter, and refreshes the lightbox.

import { displayLightBox } from "./displayLightBox.js";
import { getFilteredMedias } from "./getFilteredMedias.js";

export function filterSelector() {
    const filterSelectorOpener = document.getElementById("sort_selector_text");
    const filterSelector = document.getElementById("sort_selector");
    const filters = document.querySelectorAll(".filter");

    filterSelectorOpener.addEventListener("click", () => {
        filterSelector.classList.add("show");
    });

    filters.forEach(filter => {
        filter.addEventListener("click", async () => {
            filterSelectorOpener.textContent = filter.textContent;
            await getFilteredMedias(filter.id);
            displayLightBox();
            filterSelector.classList.remove("show");
        });
    });
}
