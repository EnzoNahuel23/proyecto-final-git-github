// Buscador de vuelos
const origen = document.getElementById("origen");
const destino = document.getElementById("destino");
const fecha = document.getElementById("fecha");
const btnBuscar = document.getElementById("btn-buscar");
const seccionResultados = document.getElementById("resultados");
const listaResultados = document.getElementById("lista-resultados");

const aerolineas = ["Aerolíneas Argentinas", "Flybondi", "JetSMART"];

btnBuscar.addEventListener("click", function () {
    mostrarResultados();
});

function mostrarResultados() {
    const textoOrigen = origen.options[origen.selectedIndex].text;
    const textoDestino = destino.options[destino.selectedIndex].text;

    listaResultados.innerHTML = "";

    aerolineas.forEach(function (aerolinea) {
        const precio = Math.floor(Math.random() * 100000 + 50000);

        const tarjeta = document.createElement("div");
        tarjeta.className = "card";

        const contenido = document.createElement("div");
        contenido.className = "card-content";

        const titulo = document.createElement("h3");
        titulo.textContent = aerolinea;

        const ruta = document.createElement("p");
        ruta.textContent = textoOrigen + " → " + textoDestino + " · " + fecha.value;

        const valor = document.createElement("span");
        valor.className = "price";
        valor.textContent = "$" + precio.toLocaleString("es-AR") + " final";

        contenido.append(titulo, ruta, valor);
        tarjeta.appendChild(contenido);
        listaResultados.appendChild(tarjeta);
    });

    seccionResultados.classList.remove("oculto");
    seccionResultados.scrollIntoView({ behavior: "smooth" });
}
