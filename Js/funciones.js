function guardarProductosLS() {    
    localStorage.setItem("productos", JSON.stringify(productos));
}

function cargarProductosLS() {  
    return JSON.parse(localStorage.getItem("productos"));
}

function agregarCarrito (id) {
    let productos = JSON.parse(localStorage.getItem("productos"));
    let productoSeleccionado = productos.find(item => item.id === id);
    if (productoSeleccionado) {
        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
        carrito.push(productoSeleccionado);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        console.log("producto agregado");
    } else {
        console.log("no seleccionaste producto");
    }
}

function renderBotonCarrito() {
    let botonCarrito = document.getElementById("botonCarrito");
    let contenido = 
    `<button type="button" class="btn btn-info position-relative">
        <img src="img/cart4.svg" alt="boton carrito" width="32">
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        <span class="visually-hidden"></span>
        </span>
    </button>`;
    botonCarrito.innerHTML = contenido;    
}
renderBotonCarrito();




