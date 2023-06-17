function cargarCarrito() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let carritoBody = document.getElementById('carrito-body');
    let totalCarrito = document.getElementById('total-carrito');
        carritoBody.innerHTML = '';
    let total = 0;
    let cantidadProductos = {};
    
    carrito.forEach(producto => {
        if (cantidadProductos.hasOwnProperty(producto.id)) {
            cantidadProductos[producto.id]++;
        } else {
            cantidadProductos[producto.id] = 1;
        }
    });

Object.keys(cantidadProductos).forEach(idProducto => {
        let producto = carrito.find(p => {
            return p.id === parseInt(idProducto);
    });
    let precioTotal = producto.precio * cantidadProductos[idProducto];
    let fila = document.createElement('tr');
    let celdaNombre = document.createElement('td');
    celdaNombre.textContent = producto.nombre;
    fila.appendChild(celdaNombre);

    let celdaCantidad = document.createElement('td');
    celdaCantidad.textContent = cantidadProductos[idProducto];
    fila.appendChild(celdaCantidad);

    let celdaPrecio = document.createElement('td');
    celdaPrecio.textContent = '$' + producto.precio.toFixed(2);
    fila.appendChild(celdaPrecio);



    let celdaEliminar = document.createElement('td');
    let botonEliminar = document.createElement('button');
    botonEliminar.className = 'btn btn-danger btn-sm';
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.addEventListener('click', function() {
        eliminarProducto(producto.id);
    });

    celdaEliminar.appendChild(botonEliminar);
    fila.appendChild(celdaEliminar);
    carritoBody.appendChild(fila);
    total += precioTotal;
});
totalCarrito.textContent = '$' + total.toFixed(2);
}

function eliminarProducto(idProducto) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let index = carrito.findIndex(producto => {
        return producto.id === idProducto;
    });
    if (index !== -1) {
        carrito.splice(index, 1);
        localStorage.setItem('carrito', JSON.stringify(carrito));
        calcularCantidadTotal();
        cargarCarrito();
    }
}
function vaciarCarrito() {
    localStorage.removeItem('carrito');
    calcularCantidadTotal();
    cargarCarrito();
}
calcularCantidadTotal();
cargarCarrito();


function calcularCantidadTotal() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let cantidadTotal = 0;
    carrito.forEach(producto =>{
        cantidadTotal += 1;
    });
    return cantidadTotal;
    }
    let cantidadTotal = calcularCantidadTotal();
    let  botonCarrito = document.getElementById("botonCarrito");
    let spanCantidad = botonCarrito.querySelector(".badge");
    spanCantidad.textContent = cantidadTotal;
console.log('Cantidad total:', cantidadTotal);



renderBotonCarrito();
