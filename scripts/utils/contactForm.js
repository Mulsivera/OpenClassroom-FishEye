// This function handles the contact form: opens/closes the modal and logs the submitted message to the console.

export function contactForm() {
    const openModalButton = document.getElementById("open_contact_modal");
    const closModalButton = document.getElementById("close_contact_modal");
    const modal = document.getElementById("contact_modal");
    const photographer_name = document.getElementsByClassName("photograph__name")[0];
    const modal_title = document.getElementsByClassName("modal_title")[0];
    const form = document.getElementById("contact_form");
    
    openModalButton.addEventListener("click", () => {
        modal_title.textContent = "Contactez-moi " + photographer_name.textContent;
        modal.style.display = "block";
        document.body.style.position = "fixed";
    });
    closModalButton.addEventListener("click", () => {
        modal.style.display = "none";
        document.body.style.position = "relative";
    });
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const firstName = form.elements["first_name"].value;
        const lastName = form.elements["last_name"].value;
        const email = form.elements["email"].value;
        const message = form.elements["message"].value;

        console.log("Bonjour, " + firstName + " " + lastName + " vous à envoyé le message suivant : " + message + " , pour le recontacter, rendez-vous à l'adresse mail suivante : " + email);
    });
}