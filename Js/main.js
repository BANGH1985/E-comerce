// Array para almacenar los productos del carrito
const carrito = [];

// Función para agregar un producto al carrito
function agregarAlCarrito() {
const id = parseInt(prompt("Ingrese el ID del producto:"));
const nombre = prompt("Ingrese el nombre del producto:");
const precio = parseFloat(prompt("Ingrese el precio del producto:"));
const producto = { id, nombre, precio };
    carrito.push(producto);
    alert("Producto agregado al carrito.");
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito() {
const id = parseInt(prompt("Ingrese el ID del producto a eliminar:"));
const indice = carrito.findIndex(producto => producto.id === id);

if (indice !== -1) {
// Eliminar el producto del carrito
    carrito.splice(indice, 1);
    alert("Producto eliminado del carrito.");
} else {
// Mostrar un mensaje de error si no se encontró el producto
    alert("El producto no se encontró en el carrito.");
    }
}

// Función para calcular el total de los productos en el carrito
function calcularTotalCarrito() {
let total = 0;

// Sumar el precio de cada producto en el carrito
for (const producto of carrito) {
    total += producto.precio;
}

// Mostrar el total en un mensaje
    alert(`Total del carrito: $${total.toFixed(2)}`);
}

// Función para mostrar la lista de productos en el carrito
function mostrarCarrito() {
if (carrito.length === 0) {
    alert("El carrito está vacío.");
} else {
    let listaProductos = "Productos en el carrito:\n";
    for (const producto of carrito) {
        listaProductos += `ID: ${producto.id}, Nombre: ${producto.nombre}, Precio: ${producto.precio}\n`;
    }
    alert(listaProductos);
    }
}
// Ejecutar el programa
let salir = false;
while (true) {
const opcion = Number(prompt(`Seleccione una opción:
    1. Agregar producto al carrito
    2. Eliminar producto del carrito
    3. Calcular total del carrito
    4. Mostrar productos en el carrito
    5. Salir`));

    switch (opcion) {
    case 1:
        agregarAlCarrito();
        break;
    case 2:
        eliminarDelCarrito();
        break;
    case 3:
        calcularTotalCarrito();
        break;
    case 4:
        mostrarCarrito();
        break;
    case 5:
        alert("¡Gracias por utilizar el carrito de compras!");
        break;
    default:
        alert("Opción inválida. Intente nuevamente.");
    }
}