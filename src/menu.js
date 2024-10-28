function appendMenuContent() {
    const templateContent = document.getElementById("menu-template");
    const clone = templateContent.content.cloneNode(true);

    const contentDestiny = document.getElementById("content");
    contentDestiny.textContent = "";
    contentDestiny.appendChild(clone);
};

export function menuButton() {
    const homeButton = document.getElementById("menu-button");
    homeButton.addEventListener("click", () => {
        appendMenuContent();
    })
};
