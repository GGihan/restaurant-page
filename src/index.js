import { initializePage } from "./initialLoad.js";
import { createMenuPage } from "./menu.js";
import "./styles.css";

console.log("Webpack is working!");

document.addEventListener('DOMContentLoaded', () => {
    initializePage();

    const contentContainer = document.getElementById("content");

    if (!contentContainer) {
        console.error("The #content div was not found in the HTML.");
        return;
    }

    const menuButton = document.getElementById("menu-button");

    const loadMenu = () => {
        contentContainer.innerHTML = "";

        const menuElement = createMenuPage();
        contentContainer.appendChild(menuElement);

        console.log("Menu Page Loaded");
    };

    menuButton.addEventListener("click", loadMenu);
});