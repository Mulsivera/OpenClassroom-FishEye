export function getMediaCardDom(media) {
    const article = document.createElement('article');

    const title = document.createElement('p');
    title.textContent = media.title

    article.appendChild(title);

    return article
}