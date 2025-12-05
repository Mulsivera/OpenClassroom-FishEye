// This function creates a DOM element for a photographer card with their portrait, name, location, tagline, and price.

export function getPhotographerCardDOM(photographer) {
    const article = document.createElement("article");
    article.setAttribute("class", "photographer");

    const link = document.createElement("a");
    link.setAttribute("class", "photographer__link");
    link.setAttribute("href", `photographer.html?id=${photographer.id}`);

    const portrait = document.createElement("img");
    portrait.setAttribute("src", `assets/photographers/photographers_id_photos/${photographer.portrait}`);
    portrait.setAttribute("class", "photographer__portrait");
    portrait.setAttribute("alt", "Portrait du photographe");

    const name = document.createElement("h2");
    name.setAttribute("class", "photographer__name");
    name.textContent = photographer.name;

    const localisation = document.createElement("p");
    localisation.setAttribute("class", "photographer__localisation");
    localisation.setAttribute("aria-label", "localisé à ");
    localisation.textContent = photographer.city + ", " + photographer.country;

    const tagline = document.createElement("p");
    tagline.setAttribute("class", "photographer__tagline");
    tagline.setAttribute("aria-label", "Slogan : ");
    tagline.textContent = photographer.tagline;

    const price = document.createElement("p");
    price.setAttribute("class", "photographer__price");
    price.setAttribute("aria-label", "Prix : ");
    price.textContent = photographer.price + "€/jour";

    article.appendChild(link);
    link.appendChild(portrait);
    link.appendChild(name);
    article.appendChild(localisation);
    article.appendChild(tagline);
    article.appendChild(price);

    return article;
}