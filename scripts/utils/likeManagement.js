// This function handles like/unlike actions on media items and updates the total likes count.

import { totalLikes } from "./totalLikes.js";

export function likeManagement() {
    const hearts = document.querySelectorAll(".heart-icon");

    hearts.forEach((heart) => {
        heart.addEventListener("click", () => {
            const likesCount = heart.previousElementSibling;
            let likes = parseInt(likesCount.textContent);

            const isLiked = heart.classList.contains("fa-solid");
            if (isLiked) {
                heart.classList.replace("fa-solid", "fa-regular");
                likes--;
            } else {
                heart.classList.replace("fa-regular", "fa-solid");
                likes++;
            }
            likesCount.textContent = likes;
            totalLikes();
        });
    });
}