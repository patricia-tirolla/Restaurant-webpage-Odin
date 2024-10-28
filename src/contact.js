function appendContactContent() {
    const templateContent = document.getElementById("contact-template");
    const clone = templateContent.content.cloneNode(true);

    const contentDestiny = document.getElementById("content");
    contentDestiny.textContent = "";
    contentDestiny.appendChild(clone);
};

export function contentButton() {
    const homeButton = document.getElementById("contact-button");
    homeButton.addEventListener("click", () => {
        appendContactContent();
    })
};
