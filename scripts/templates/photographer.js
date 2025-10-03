class Photographer {
    constructor(data) {
        this.name = data.name;
        this.portrait = data.portrait;
        this.country = data.country;
        this.city = data.city;
        this.tagline = data.tagline;
        this.price = data.price;
    }

    getUserCardDOM() {
    const article = document.createElement('article');

    const img = document.createElement('img');
    img.setAttribute("src", `assets/photographers/photographers_id_photos/${this.portrait}`)

    const h2 = document.createElement('h2');
    h2.textContent = this.name;

    article.appendChild(img);
    article.appendChild(h2);

    return article

    }

}