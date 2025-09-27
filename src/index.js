import { createHomePage } from "./createHomePage.js";
import { createMenuPage } from "./menu.js";
import { createAboutPage } from "./about.js";
import "./styles.css";



const switchContent = (pageGenerator, container) => {
    container.innerHTML = "";

    const newPageElement = pageGenerator();
    container.appendChild(newPageElement);
};

document.addEventListener('DOMContentLoaded', () => {

    const contentContainer = document.getElementById("content");

    if (!contentContainer) {
        console.error("The #content div was not found in the HTML.");
        return;
    }

    // Initial Home Page Load
    switchContent(createHomePage, contentContainer);


    const homeButton = document.getElementById("home-button");
    const menuButton = document.getElementById("menu-button");
    const aboutButton = document.getElementById("about-button");

    homeButton.addEventListener("click", () => {
        switchContent(createHomePage, contentContainer);
    })

    menuButton.addEventListener("click", () => {
        switchContent(createMenuPage, contentContainer);
    });

    aboutButton.addEventListener("click", () => {
        switchContent(createAboutPage, contentContainer);
    });

});