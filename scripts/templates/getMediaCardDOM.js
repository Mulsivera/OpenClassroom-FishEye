// Create a image card

import { nameTransform } from "../utils/nameTransform.js";

export function getMediaCardDom(media, photographer_name) {

  const photographer_name_text = nameTransform(photographer_name);

  const article = document.createElement("article");
  article.className = "mediaImage";

  const informations = document.createElement("div");
  informations.className = "mediaImage-infos";

  if(media.image) {
      const picture = document.createElement("img");
      picture.src = `./assets/photographers/${photographer_name_text}/${media.image}`;
      picture.className = "mediaImage-picture";
      article.append(picture);
  }

  if(media.video) {
      const video = document.createElement("video");
      video.src = `./assets/photographers/${photographer_name_text}/${media.video}`;
      video.className = "mediaImage-picture";
      article.append(video);
  }

  const title = document.createElement("h2");
  title.textContent = media.title;

  const likesContainer = document.createElement("div");
  likesContainer.className = "likes-container";

  const likesCount = document.createElement("span");
  likesCount.className = "likes-count";
  likesCount.textContent = media.likes;

  const heartIcon = document.createElement("i");
  heartIcon.className = "fa-regular fa-heart heart-icon";

  likesContainer.append(likesCount, heartIcon);
  informations.append(title, likesContainer);
  article.append(informations);

  return article;
}
