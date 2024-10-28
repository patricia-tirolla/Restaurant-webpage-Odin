export default function appendHomeContent() {
    const templateContent = document.getElementById("about-template");
    const clone = templateContent.content.cloneNode(true);

    const contentDestiny = document.getElementById("content");
    contentDestiny.textContent = "";
    contentDestiny.appendChild(clone);
};

export function homeButton() {
    const homeButton = document.getElementById("home-button");
    homeButton.addEventListener("click", () => {
        appendHomeContent();
    })
};
