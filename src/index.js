import { initializePage } from "./initialLoad.js";
import "./styles.css";

console.log("Webpack is working!");

document.addEventListener('DOMContentLoaded', () => {
    initializePage();
});