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
    article.setAttribute("class", "photographer")

    const portrait = document.createElement('img');
    portrait.setAttribute("src", `assets/photographers/photographers_id_photos/${this.portrait}`)
    portrait.setAttribute("class", "photographer__portrait");
    portrait.setAttribute("alt", "Portrait du photographe " + this.name);

    const name = document.createElement('h2');
    name.setAttribute("class", "photographer__name")
    name.textContent = this.name;

    const localisation = document.createElement('p');
    localisation.setAttribute("class", "photographer__localisation");
    localisation.textContent = this.city + ", " + this.country;

    const tagline = document.createElement('p');
    tagline.setAttribute("class", "photographer__tagline");
    tagline.textContent = this.tagline;

    const price = document.createElement('p');
    price.setAttribute("class", "photographer__price");
    price.textContent = this.price +"€/jour";

    article.appendChild(portrait);
    article.appendChild(name);
    article.appendChild(localisation);
    article.appendChild(tagline);
    article.appendChild(price);

    return article

    }

}