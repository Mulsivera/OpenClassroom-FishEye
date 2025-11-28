// Create a image card

export function getMediaCardDom(media, nameTransform) {

    const article = document.createElement("article");
    article.className = "mediaImage";

    const informations = document.createElement("div");
    informations.className = "mediaImage-infos";
    if (media.image) {
        const picture = document.createElement("img");
        picture.src = `./assets/photographers/${nameTransform}/${media.image}`;
        picture.className = "mediaImage-picture";
        picture.id = media.id
        picture.alt = media.title
        article.append(picture);
    }

    if (media.video) {
        const video = document.createElement("video");
        video.src = `./assets/photographers/${nameTransform}/${media.video}`;
        video.className = "mediaImage-picture";
        video.id = media.id
        video.alt = media.title
        article.append(video);
    }

    const title = document.createElement("h2");
    title.textContent = media.title;

    const likesContainer = document.createElement("div");
    likesContainer.className = "likes-container";

    const likesCount = document.createElement("span");
    likesCount.className = "likes-count";
    likesCount.setAttribute("aria-label", "Nombre de likes");
    likesCount.textContent = media.likes;

    const heartIcon = document.createElement("i");
    heartIcon.className = "fa-regular fa-heart heart-icon";
    heartIcon.setAttribute("aria-label", "Icon de like")

    likesContainer.append(likesCount, heartIcon);
    informations.append(title, likesContainer);
    article.append(informations);

    return article;
}
