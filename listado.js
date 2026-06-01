// arreglo de snacks con su categoria
const snacks = [
    { nombre: "Alfajor", categoria: "Dulces" },
    { nombre: "Mantecol", categoria: "Dulces" },
    { nombre: "Rhodesia", categoria: "Dulces" },
    { nombre: "Saladix", categoria: "Salado" },
    { nombre: "Mani saborizado", categoria: "Salado" },
    { nombre: "Chizitos", categoria: "Salado" }
];

const contenedorSnacks = document.getElementById("listado-snacks");
const btnTodos = document.getElementById("btn-todos");
const btnDulces = document.getElementById("btn-dulces");
const btnSalados = document.getElementById("btn-salados");

// muestra las tarjetas
function mostrarSnacks(lista) {
    contenedorSnacks.innerHTML = "";

    lista.map((snack) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.textContent = `${snack.nombre} (${snack.categoria})`;
        contenedorSnacks.appendChild(card);
    });
}

// boton de mostrar todos los snacks
btnTodos.addEventListener("click", () => {
    mostrarSnacks(snacks);
});

// boton de mostrar solo los snacks dulces
btnDulces.addEventListener("click", () => {
    const dulces = snacks.filter((snack) => snack.categoria === "Dulces");
    mostrarSnacks(dulces);
});

// boton de mostrar solo los snacks salados
btnSalados.addEventListener("click", () => {
    const salados = snacks.filter((snack) => snack.categoria === "Salado");
    mostrarSnacks(salados);
});

// mostrar todo al cargar
mostrarSnacks(snacks);
