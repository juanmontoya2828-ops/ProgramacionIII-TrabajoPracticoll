// arreglo de meriendas
const meriendas = [
    "Cafe con medialunas",
    "Tarta de queso",
    "Licuado de frutilla",
    "Pepas caseras",
    "Cafe con leche y porcion de pastafrola",
];

const listameriendasdiv = document.getElementById("lista-meriendas");
const btncontar = document.getElementById("btn-contar");
const textoCantidad = document.getElementById("texto-cantidad");

// se muestra lista usando forEach (DOM y moedlo de caja con .card)
meriendas.forEach((meriendas) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.textContent = meriendas;
    listameriendasdiv.appendChild(card);
});

// evento de click muestra la cantidad de meriendas
btncontar.addEventListener("click", () => {
    const cantidad = meriendas.length;
    textoCantidad.textContent = `Hay ${cantidad} meriendas en el menú.`;
});