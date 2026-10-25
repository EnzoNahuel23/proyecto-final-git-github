// Buscador de vuelos
const origen = document.getElementById("origen");
const destino = document.getElementById("destino");
const fecha = document.getElementById("fecha");
const btnBuscar = document.getElementById("btn-buscar");
const seccionResultados = document.getElementById("resultados");
const listaResultados = document.getElementById("lista-resultados");
const mensaje = document.getElementById("mensaje");

const aerolineas = ["Aerolíneas Argentinas", "Flybondi", "JetSMART"];

// No se puede elegir una fecha anterior a hoy
const ahora = new Date();
const hoy = new Date(ahora.getTime() - ahora.getTimezoneOffset() * 60000)
    .toISOString()
    .split("T")[0];
fecha.min = hoy;

btnBuscar.addEventListener("click", function () {
    const error = validarBusqueda();
    if (error) {
        mensaje.textContent = error;
        seccionResultados.classList.add("oculto");
        return;
    }
    mensaje.textContent = "";
    mostrarResultados();
});

function validarBusqueda() {
    if (origen.value === destino.value) {
        return "El origen y el destino no pueden ser iguales.";
    }
    if (fecha.value === "") {
        return "Elegí una fecha de salida.";
    }
    if (fecha.value < hoy) {
        return "La fecha de salida no puede ser anterior a hoy.";
    }
    return "";
}

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

// Al elegir un destino destacado que está en el buscador, se completa
document.querySelectorAll(".destino[data-destino]").forEach(function (tarjeta) {
    tarjeta.addEventListener("click", function () {
        destino.value = tarjeta.dataset.destino;
    });
});

// Resalta el ícono del menú que se eligió
const enlacesMenu = document.querySelectorAll(".nav-iconos a");
enlacesMenu.forEach(function (enlace) {
    enlace.addEventListener("click", function () {
        enlacesMenu.forEach(function (otro) {
            otro.classList.remove("activo");
        });
        enlace.classList.add("activo");
    });
});

// Formulario de contacto
const formContacto = document.getElementById("form-contacto");
const mensajeContacto = document.getElementById("mensaje-contacto");

function mostrarMensaje(texto, tipo) {
    mensajeContacto.textContent = texto;
    mensajeContacto.classList.remove("error", "exito");
    mensajeContacto.classList.add(tipo);
}

formContacto.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const asunto = document.getElementById("asunto").value;
    const consulta = document.getElementById("consulta").value.trim();

    if (nombre === "") {
        mostrarMensaje("Ingresá tu nombre y apellido.", "error");
        return;
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        mostrarMensaje("Ingresá un correo electrónico válido.", "error");
        return;
    }

    if (asunto === "") {
        mostrarMensaje("Seleccioná un asunto.", "error");
        return;
    }

    if (consulta.length < 10) {
        mostrarMensaje("El mensaje debe tener al menos 10 caracteres.", "error");
        return;
    }

    mostrarMensaje("¡Gracias, " + nombre + "! Recibimos tu consulta y te responderemos a la brevedad.", "exito");
    formContacto.reset();
});

// Al elegir una promoción, se lleva al buscador
document.querySelectorAll(".promo .btn-promo").forEach(function (boton) {
    boton.addEventListener("click", function () {
        document.getElementById("mensaje").textContent = "";
        seccionResultados.classList.add("oculto");
    });
});
