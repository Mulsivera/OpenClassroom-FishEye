import { getMediaCardModal } from "../templates/getMediaCardModal.js";

export function navigateLightBox() {

    const images = document.querySelectorAll(".mediaImage .mediaImage-picture");
    var imageIds = Array.from(images).map(img => parseInt(img.id, 10));
    const navigation_button = document.querySelectorAll("#navigation");
    const content = document.querySelector("#display_modal .content #content");

    navigation_button.forEach((button) => {
        button.addEventListener("click", async () => {
            var new_index = 0;
            var max_index = (imageIds.length) - 1;
            const actual_index = parseInt(document.querySelector(".modal_media").id, 10);
            if((button.className).includes("left")) {
                if(actual_index === 0) {
                    new_index = max_index;
                }else{
                    new_index = actual_index - 1;
                }
            }
            if((button.className).includes("right")) {
                if(actual_index === max_index) {
                    new_index = 0;
                }else{
                    new_index = actual_index + 1;
                }
            }
            const new_id = imageIds[new_index];
            const new_image = document.getElementById(new_id);
            getMediaCardModal(content,new_image,new_index);
        });
    });
}