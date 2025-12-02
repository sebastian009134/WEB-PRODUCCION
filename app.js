document.addEventListener("DOMContentLoaded", () => {
    const btnVerOfertas = document.getElementById("btnVerOfertas");
    const mensajeOfertas = document.getElementById("mensajeOfertas");
    const botonesAgregar = document.querySelectorAll(".btn-add-cart");
    const cartCount = document.getElementById("cartCount");
    const listaCarrito = document.getElementById("listaCarrito");
    const totalCarrito = document.getElementById("totalCarrito");
    const btnContacto = document.getElementById("btnContacto");

    let cantidadCarrito = 0;
    let total = 0;

    // Evento 1: botón "Ver ofertas del día"
    btnVerOfertas.addEventListener("click", () => {
        mensajeOfertas.textContent =
            "¡Hoy tenemos 10% de descuento en todos los peluches!";
    });

    // Evento 2: botones "Agregar al carrito"
    botonesAgregar.forEach((boton) => {
        boton.addEventListener("click", () => {
            const nombre = boton.getAttribute("data-nombre");
            const precio = Number(boton.getAttribute("data-precio"));

            cantidadCarrito++;
            total += precio;

            // actualizar badge del carrito
            cartCount.textContent = cantidadCarrito;

            // agregar item a la lista
            const li = document.createElement("li");
            li.className = "list-group-item d-flex justify-content-between";
            li.textContent = nombre;

            const spanPrecio = document.createElement("span");
            spanPrecio.textContent = `Bs. ${precio}`;
            li.appendChild(spanPrecio);

            listaCarrito.appendChild(li);

            // actualizar total
            totalCarrito.textContent = total;
        });
    });

    // Evento 3: botón de contacto
    btnContacto.addEventListener("click", () => {
        alert("Gracias por tu mensaje. Te responderemos a la brevedad 😊");
    });
});
