// This class fetches data from a JSON file and returns it.

export class Datas {
    static async getData() {
        try {
            const response = await fetch("./data/photographers.json");
            if (!response.ok) {
                throw new Error(
                    `script/data/getData/getData.js => HTTP Error : ${response.status}`,
                );
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("script/data/getData/getData.js => Error:", error);
            return null;
        }
    }
}