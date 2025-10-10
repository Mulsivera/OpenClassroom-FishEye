// Display One element from a GET Data

 export async function displayOneElement (parent, getData) {
    try {
        const parentElement = document.querySelector(parent);
        if (!parentElement) throw new Error("scripts/data/displayData/displayOneElement.js => " + parent + " not found" );

        parentElement.appendChild(getData());
    } catch (error) {
        console.error("scripts/data/displayData/displayOneElement.js => Error :", error);
    }
}



