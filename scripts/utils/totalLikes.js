export function totalLikes() {
    const allMedias = document.getElementsByClassName("likes-count");
    let totalLikes = 0;

    for (let media of allMedias) {
        const count = parseInt(media.textContent, 10);
        totalLikes += count;
    }

    const total_like_display = document.getElementById("likes_display");

    total_like_display.innerHTML = "";

    const likes = document.createElement('span');
    likes.textContent = totalLikes;

    const heart_icon = document.createElement('i');
    heart_icon.className = 'fa-solid fa-heart';

    total_like_display.appendChild(likes);
    total_like_display.appendChild(heart_icon);
}
