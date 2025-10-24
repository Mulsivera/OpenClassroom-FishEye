// GET All medias form a specific photographer
        
export async function getAllMediasFromPhotographer(photographerId) {
    try {
        const response = await fetch("../data/photographers.json");

        if(!response.ok) {
            throw new Error(`script/data/getData/getAllMediasFromPhotographer.js => HTTP Error : ${response.status}`)
        }

        const data = await response.json();
        const mediasData = data.media.filter(m => m.photographerId === photographerId);
        return mediasData;
    } catch (error) {
        console.error("script/data/getData/getAllMediasFromPhotographer.js => ", error);
        return null;
    }

}