import { getMediaCardModal } from "../templates/getMediaCardModal.js";

export function displayLightBox() {

    const images = document.querySelectorAll(".mediaImage .mediaImage-picture");
    var imageIds = Array.from(images).map(img => parseInt(img.id, 10));
    const modal = document.getElementById("display_modal");
    const content = document.querySelector("#display_modal .content #content");
    const close_button = document.querySelector("#display_modal #close");

    images.forEach((image, index) => {
        image.addEventListener("click", async () => {
            modal.style.display = "block";
            document.body.style.position = "fixed";
            getMediaCardModal(content,image,index);
        });
    });

    close_button.addEventListener("click", () => {
            modal.style.display = "none";
            document.body.style.position = "relative";
            var imageIds = [];
            content.innerHTML = "";
    })
}