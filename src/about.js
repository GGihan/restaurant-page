function createAboutPage() {
    const aboutContainer = document.createElement("div");
    aboutContainer.classList.add("about-container");

    const h1 = document.createElement('h1');
    h1.textContent = "About us:";

    const p1 = document.createElement('p');
    p1.textContent = "We opened our doors in 1995 with a simple commitment: to serve fresh, seasonal, and locally-sourced meals. Our family-run restaurant has grown over the decades, but our passion for authentic flavors remains the same.";

    const p2 = document.createElement('p');
    p2.textContent = "We believe that great food starts with great ingredients, and we strive to create a warm, inviting atmosphere for all our guests. Come join our family!";

    aboutContainer.appendChild(h1);
    aboutContainer.appendChild(p1);
    aboutContainer.appendChild(p2);

    return aboutContainer;
}

export { createAboutPage };