// Variables
const modal = document.getElementById("myModal");
const cookieBanner = document.getElementById("cookie-banner");
const acceptCookie = document.getElementById("accept-cookie");
const cartNotification = document.getElementById("cartCount");
const carrito = $('#carrito');
const listaDeCompras = $('#lista-de-compras');
const abrirCarrito = $('#abrir-carrito');
const botonVaciar = $('#boton-vaciar');

// arreglo para el carrito
const productos = [];

// Funciones

// función motivo del regalo
function cerrarVentana() {
    var selectedValue = document.getElementById("opciones").value;
    if (selectedValue !== "") {
        document.getElementById("myModal").style.display = "none";
        if (selectedValue === "opcion2") {
            document.querySelector(".navbar").style.backgroundColor = "#5d9b9b"; // Cambiar a azul
            document.querySelector(".footer").style.backgroundColor = "#5d9b9b"; // Cambiar a azul
        }
        if (selectedValue === "opcion3") {
            document.querySelector(".navbar").style.backgroundColor = "#efa94a"; // Cambiar a amarillo
            document.querySelector(".footer").style.backgroundColor = "#efa94a"; // Cambiar a amarillo
        }
    } else {
        alert("Debes seleccionar una opción antes de continuar.");
    }
}

// función para actualizar información del carrito
function actualizarCarrito() {
    listaDeCompras.empty();
    let total = 0;
    productos.forEach((producto, index) => {
        const item = $('<li class="list-group-item">');
        const eliminar = $('<button class="btn btn-sm btn-danger eliminar-producto">X</button>');
        eliminar.attr('data-indice', index);
        item.text(producto.nombre + ' x ' + producto.cantidad + ': $' + (producto.precio * producto.cantidad));
        item.append(eliminar);
        listaDeCompras.append(item);
        total += producto.precio * producto.cantidad;
    });
    if (productos.length > 0) {
        listaDeCompras.append('<li class="list-group-item font-weight-bold">Total: $' + total + '</li>');
        cartNotification.style.display = "inline";
        cartNotification.innerHTML = productos.length;
    } else {
        listaDeCompras.append('<li class="list-group-item">Carrito vacío</li>');
        cartNotification.style.display = "none";
    }
}

// Eventos

// evento para lista de motivo del regalo
window.onload = function() {
    modal.style.display = "block";
};

// evento para cargar el carrusel
$(document).ready(function(){
    $('#miCarrusel').carousel();
});

// evento para las cookies
document.addEventListener("DOMContentLoaded", function () {
    var cookieAccepted = localStorage.getItem("cookieAccepted");
    if (!cookieAccepted) {
        cookieBanner.style.display = "block";
    } else {
        cookieBanner.style.display = "block";
        setTimeout(function () {
            cookieBanner.style.display = "none";
        }, 3000);
    }

    acceptCookie.addEventListener("click", function () {
        cookieBanner.style.display = "none";
        localStorage.setItem("cookieAccepted", "true");
    });
});


// evento para abrir el carrito
abrirCarrito.click(function() {
    carrito.toggleClass('d-none');
});


// evento para agregar productos al carrito
$('.agregar-carrito').click(function() {
    const nombre = $(this).data('nombre');
    const precio = $(this).data('precio');
    const indice = productos.findIndex(item => item.nombre === nombre);
    if (indice !== -1) {
        productos[indice].cantidad++;
    } else {
        productos.push({ nombre, precio, cantidad: 1 });
    }
    actualizarCarrito();
});

// evento para eliminar productos del carrito
$(document).on('click', '.eliminar-producto', function() {
    const indice = $(this).data('indice');
    productos.splice(indice, 1);
    actualizarCarrito();
});

// evento para vaciar el carrito
botonVaciar.click(function() {
    productos.length = 0;
    actualizarCarrito();
});

