import { getOneElement } from "../data/getData/getOneElement.js";

export async function getMediaCardModal(div,media,index) {
    const media_object = await getOneElement("media",(Number(media.id)));
    div.innerHTML = "";
    if (media.tagName === "IMG") {
        const image_element = document.createElement('img');
        image_element.setAttribute("src", media.src)
        image_element.setAttribute("class", "modal_media");
        image_element.setAttribute("id", index);
        const title = document.createElement('p');
        title.setAttribute("class","media_title");
        title.textContent = media_object.title;
        div.appendChild(image_element);
        div.appendChild(title);
    }
    if (media.tagName === "VIDEO") {
        const video_element = document.createElement('video');
        video_element.setAttribute("src", media.src)
        video_element.setAttribute("class", "modal_media");
        video_element.setAttribute("id", index);
        video_element.setAttribute("controls", true);
        video_element.setAttribute("width", "100%");
        video_element.setAttribute("height", "0");
        const title = document.createElement('p');
        title.setAttribute("class","media_title");
        title.textContent = media_object.title;
        div.appendChild(video_element);
        div.appendChild(title);
    }
}