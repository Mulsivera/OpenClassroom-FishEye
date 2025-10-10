class Photographer {
    constructor(data) {
        this.name = data.name;
        this.portrait = data.portrait;
        this.country = data.country;
        this.city = data.city;
        this.tagline = data.tagline;
        this.price = data.price;
        this.id = data.id;
    }

    getUserCardDOM() {
    const article = document.createElement('article');
    article.setAttribute("class", "photographer")

    const link = document.createElement('a');
    link.setAttribute("class", "photographer__link");
    link.setAttribute("href", `photographer.html?id=${this.id}`);

    const portrait = document.createElement('img');
    portrait.setAttribute("src", `assets/photographers/photographers_id_photos/${this.portrait}`)
    portrait.setAttribute("class", "photographer__portrait");
    portrait.setAttribute("alt", "Portrait du photographe " + this.name);

    const name = document.createElement('h2');
    name.setAttribute("class", "photographer__name")
    name.setAttribute("aria-label", "Nom du photographe : " + this.name);
    name.textContent = this.name;

    const localisation = document.createElement('p');
    localisation.setAttribute("class", "photographer__localisation");
    localisation.setAttribute("aria-label", "localisé à " + this.city + ", " + this.country);
    localisation.textContent = this.city + ", " + this.country;

    const tagline = document.createElement('p');
    tagline.setAttribute("class", "photographer__tagline");
    tagline.setAttribute("aria-label", "Slogan : " + this.tagline);
    tagline.textContent = this.tagline;

    const price = document.createElement('p');
    price.setAttribute("class", "photographer__price");
    price.setAttribute("aria-label", "Prix : " + this.price + " euros par jour");
    price.textContent = this.price +"€/jour";

    article.appendChild(link);
    link.appendChild(portrait);
    link.appendChild(name);
    article.appendChild(localisation);
    article.appendChild(tagline);
    article.appendChild(price);

    return article

    }

}