// Display Alls elements from a GET Data

export async function displayAllElements (element, parent, getter) {
    try {
        const parentElement = document.querySelector(parent);
        if (!parentElement) throw new Error("scripts/data/displayData/displayAllElements.js => " + parent + " not found" );

        element.forEach((e) => {
            parentElement.appendChild(getter(e))

        });

        } catch (error) {
            console.error("scripts/data/displayData/displayAllElements.js => Error :", error);
        }
}