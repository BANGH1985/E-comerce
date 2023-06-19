function guardarProductosLS() {    
    localStorage.setItem("productos", JSON.stringify(productos));
}

function cargarProductosLS() {  
    return JSON.parse(localStorage.getItem("productos"));
}

function cargarCarrito() {
    let carrito = localStorage.getItem("carrito");
    if (carrito) {
        return JSON.parse(carrito);
    } else {
        return [];
    }
}

function agregarCarrito (id) {
    let carrito = cargarCarrito();
    let productoSeleccionado = productos.find(item => item.id === id);
    if (productoSeleccionado) {
        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
        carrito.push(productoSeleccionado);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        
        console.log("producto agregado");
    } else {
        console.log("no seleccionaste producto");
    }
    actualizarCantidadCarrito();
}

function renderBotonCarrito() {
    let botonCarrito = document.getElementById("botonCarrito");
    let carrito = cargarCarrito();
    let contenido =
    `<button type="button" class="btn btn-info position-relative">
        <img src="img/cart4.svg" alt="boton carrito" width="32">
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        <span id="cantidad-carrito">0</span>
        <span class="visually-hidden">productos en el carrito</span>
        </span>
    </button>`;
    botonCarrito.innerHTML = contenido;

    let cantidad = Array.isArray(carrito) ? carrito.length : 0;

    let cantidadCarritoSpan = document.getElementById("cantidad-carrito");
    cantidadCarritoSpan.innerText = cantidad.toString();
}

renderBotonCarrito();

function actualizarCantidadCarrito() {
    let carrito = cargarCarrito();
    let cantidad = 0;
    if (carrito && Array.isArray(carrito)) {
        cantidad = carrito.length;
    }
    let cantidadCarritoSpan = document.getElementById("cantidad-carrito");

    cantidadCarritoSpan.innerText = cantidad.toString();
}
renderBotonCarrito();





