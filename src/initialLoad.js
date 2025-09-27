function initializePage() {
    console.log("Page Initialization Started")

    const contentContainer = document.getElementById("content");

    if (!contentContainer) {
        console.error("The #content div was not found in the HTML.");
        return;
    }

    contentContainer.innerHTML = "";

    const headlineContainer = document.createElement("div");
    headlineContainer.classList.add("headline-container");

    const h1 = document.createElement("h1");
    h1.textContent = "Restaurant!";

    const h2 = document.createElement("h2");
    h2.textContent = "The most delicious and fresh meals!";

    headlineContainer.appendChild(h1);
    headlineContainer.appendChild(h2);

    const imageContainer =  document.createElement("div");
    imageContainer.classList.add("image-container");

    const img = document.createElement("img")

    img.src = "/images/restaurant-food.jpg"; 
    img.alt = "Food served on tables in a restaurant";

    imageContainer.appendChild(img);

    const descriptionContainer = document.createElement("div");
    descriptionContainer.classList.add("description-container");

    const p = document.createElement("p");
    p.textContent = `
        In hac habitasse platea dictumst.
        Aliquam in lorem porta, fringilla turpis vel, semper quam.
        Aliquam ut rutrum nunc. Donec elementum.
    `;

    descriptionContainer.appendChild(p);

    contentContainer.appendChild(headlineContainer);
    contentContainer.appendChild(imageContainer);
    contentContainer.appendChild(descriptionContainer);

    console.log("Initial content built.");
}


export { initializePage };