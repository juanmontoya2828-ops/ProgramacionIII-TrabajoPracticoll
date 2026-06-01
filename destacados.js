// contenedor de texto y tarjetas del contador
const tarjetasContainer = document.getElementById("tarjetas-container");
const contadorTexto = document.getElementById("contador-seleccionados");

// toma click dentro del contenedor
tarjetasContainer.addEventListener("click", (event) => {
    const tarjeta = event.target.closest(".card-small");

    if (!tarjeta) return;

    tarjeta.classList.toggle("selected");
    actualizarContador();
});

// cuenta las tarjetas seleccionadas
function actualizarContador() {
    const seleccionados = document.querySelectorAll(".card-small.selected");
    const cantidad = seleccionados.length;
    contadorTexto.textContent = `Tarjetas seleccionadas: ${cantidad}`;
}