// This function displays all given elements inside a specified container on the page.

export async function displayAllElements(elements, parentSelector, getter) {
    try {
        const parentElement = document.querySelector(parentSelector);
        if (!parentElement) throw new Error(`Parent not found: ${parentSelector}`);

        parentElement.innerHTML = "";

        elements.forEach((el) => {
            parentElement.appendChild(getter(el));
        });

    } catch (error) {
        console.error("displayAllElements.js => Error:", error);
    }
}