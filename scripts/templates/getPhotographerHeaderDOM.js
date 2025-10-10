export function getPhotographerHeaderDOM(photographer) {

    const article = document.createElement('article');

    const information_div = document.createElement('div');
    information_div.setAttribute("class", "photographer__informations");

    const name = document.createElement('h1');
    name.setAttribute("class", "photograph__name")
    name.setAttribute("aria-label", "Nom du photographe : " + photographer.name);
    name.textContent = photographer.name;

    const localisation = document.createElement('p');
    localisation.setAttribute("class", "photograph__localisation");
    localisation.setAttribute("aria-label", "localisé à " + photographer.city + ", " + photographer.country);
    localisation.textContent = photographer.city + ", " + photographer.country;

    const tagline = document.createElement('p');
    tagline.setAttribute("class", "photograph__tagline");
    tagline.setAttribute("aria-label", "Slogan : " + photographer.tagline);
    tagline.textContent = photographer.tagline;

    const contact_button = document.createElement('button');
    contact_button.setAttribute("class", "contact_button");
    contact_button.setAttribute("onclick", "displayModal()");
    contact_button.textContent = "Contactez-moi";

    const portrait = document.createElement('img');
    portrait.setAttribute("src", `assets/photographers/photographers_id_photos/${photographer.portrait}`)
    portrait.setAttribute("class", "photograph__portrait");
    portrait.setAttribute("alt", "Portrait du photographe " + photographer.name);

    article.appendChild(information_div);
    information_div.appendChild(name);
    information_div.appendChild(localisation);
    information_div.appendChild(tagline);
    article.appendChild(contact_button);
    article.appendChild(portrait);

    return article
}