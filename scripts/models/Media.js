// This class represents a media item with common properties like id, title, likes, date, price, and type (image or video).

export class Media {
    constructor(data) {
        this.id = data.id;
        this.photographerId = data.photographerId;
        this.title = data.title;
        this.likes = data.likes;
        this.date = data.date;
        this.price = data.price;
        this.image = data.image || null;
        this.video = data.video || null;
    }
}