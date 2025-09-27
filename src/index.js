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

    const switchContent = (pageGenerator) => {
        contentContainer.innerHTML = "";

        const newPageElement = pageGenerator();
        contentContainer.appendChild(newPageElement);

        console.log("Page Loaded");
    };

    const homeButton = document.getElementById("home-button");
    const menuButton = document.getElementById("menu-button");
    const aboutButton = document.getElementById("about-button");

    menuButton.addEventListener("click", () => {
        switchContent(createMenuPage);
    });

    
});