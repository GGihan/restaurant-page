function createMenuItem(name, price) {
    const item = document.createElement("li");
    item.textContent = `${name} - $${price}`;
    return item;
}


function createMenuPage() {
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    const h1 = document.createElement("h1");
    h1.textContent = "Our Delicious Menu:";
    menuContainer.appendChild(h1);

    const ul = document.createElement("ul");
    ul.appendChild(createMenuItem("Spaghetti Carbonara", "15"));
    ul.appendChild(createMenuItem("Fettuccine Alfredo", "20"));
    ul.appendChild(createMenuItem("Lasagna Bolognese", "10"));

    menuContainer.appendChild(ul);

    return menuContainer;
}

export { createMenuPage };