class Media {
    constructor(data) {
        this.id = data.id;
        this.photographerId = data.photographerId;
        this.title = data.title;
        this.image = data.image;
        this.likes = data.likes;
        this.date = data.date;
        this.price = data.price;
    }

    getMediaCardDom() {
        const article = document.createElement('article');

        const title = document.createElement('p');
        title.textContent = this.title

        article.appendChild(title);

        return article
    }
}