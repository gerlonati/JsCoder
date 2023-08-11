const productos = [
    {
        id: "camiseta 01",
        titulo: "camiseta 01",
        imagen: "./img/camiseta/camiseta.webp",
        categoria: {
            nombre: "camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "campera 01",
        titulo: "campera 01",
        imagen: "./img/camperas/156067-1600-auto.webp",
        categoria: {
            nombre: "camperas",
            id: "camperas"
        },
        precio: 1000
    },
    {
        id: "pantalon 01",
        titulo: "pantalon 01",
        imagen: "./img/pantalon/pantalon.webp",
        categoria: {
            nombre: "Pantalones",
            id: "Pantalones"
        },
        precio: 1000
    },
    {
        id: "medias 01",
        titulo: "medias 01",
        imagen: "./img/medias/medias.webp",
        categoria: {
            nombre: "medias",
            id: "medias"
        },
        precio: 1000
    }
    ];


const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let agregarProducto = document.querySelectorAll(".producto-comprar");
const unidad = document.querySelector("unidad");

function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {
        
        let div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-comprar" id="${producto.id}">Comprar</button>
            </div>
        `;

        contenedorProductos.append(div);
    
    })
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => { 

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todo") {
            
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;

            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })

});

function actualizarBotonesAgregar () {
    agregarProducto = document.querySelectorAll(".producto-comprar");

    agregarProducto.forEach(boton =>{
        boton.addEventListener("clik", agregarAlCarrito);
    });
}

const productosEnCarrito = [];

function agregarAlCarrito(e) {

    const idBoton = e.currentTarget.id;
    const producotsAgregados = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;

    } else {
        producotsAgregados.cantidad = 1;
        productosEnCarrito.push(producotsAgregados);
    }

    actualizarUnidades();

}

function actualizarUnidades() {
    let nuevaUnidad = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    unidad.innerText = nuevaUnidad;
}


    