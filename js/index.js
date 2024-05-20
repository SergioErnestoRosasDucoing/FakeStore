let listaProductos2 = document.querySelector('#listaProductos2');

// Obteniendo los productos de la API


// Obteniendo los productos de la segunda API
function obtenerProductos2() {
    fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => {
            let productosObtenidos = data.products;
            console.log("Productos obtenidos:", productosObtenidos);

            productosObtenidos.forEach((producto) => {
                console.log("Producto: ", producto);

                listaProductos2.innerHTML += `
                <div class="col-12 col-md-3 mb-4">
                    <div class="card h-100">
                        <img src="${producto.images[0]}" class="imagenProducto card-img-top py-1" alt="...">
                        <div class="card-body">
                            <h5 class="card-title mb-3">${producto.title}</h5>
                            <p class="card-text">${producto.description.slice(0, 100)}</p>
                            <p class="text-danger">${producto.price}</p>    
                            <button type="button" class="button">
                                <span class="button__text">Comprar</span>
                                <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
                            </button>
                        </div>
                    </div>
                </div>
                `;
            });
        })
        .catch(error => {
            console.error("Error al obtener los productos de la API:", error);
        });
}
obtenerProductos2();

// Promise o Promesa
fetch('https://fakestoreapi.com/products/')
    .then(res => res.json())
    .then(json => console.log(json))
