function guardarProductosLS() {    
    localStorage.setItem("productos", JSON.stringify(productos));
}

function cargarProductosLS() {  
    return JSON.parse(localStorage.getItem("productos"));
}

function renderProductos() {
    let productos = cargarProductosLS();
    let contenido = "";
    productos.forEach(producto => {
        contenido += 
        `<div class="col-md-2 m-3">
            <div class="card" style="width: 15rem;">
                <img src="${producto.imagen}" class="card-img-top-fluid" style="width:238px;" alt="${producto.nombre}">
                <div class="card-body text-center">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">${producto.tipo}</p>
                    <p class="card-text">${producto.precio}</p>
                    <a class="btn btn-info" onClick="agregarCarrito(${producto.id});">COMPRAR</a>
                </div>
            </div>
        </div>`;
    });
    document.getElementById("contenido").innerHTML = contenido;
}
renderProductos();
